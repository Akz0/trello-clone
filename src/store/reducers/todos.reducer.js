import _ from 'lodash'
import { TodoConstants } from '../actions/constants.action';

const initialState = {
    todoItems: null,
    loading: false,
    error: null
}

const addTodoSuccess = (state, action) => {
    const updatedTodoItems = _.cloneDeep(state.todoItems);
    const newTodo = {
        id: Math.random(),
        todo: action.payload.name,
        description: '',
        status: '-',
        listID:action.payload.listID
    }
    updatedTodoItems.push(newTodo)
    localStorage.setItem('todos',JSON.stringify(updatedTodoItems))
    const newState = {
        ...state,
        todoItems: updatedTodoItems,
        loading: false,
    }

    return newState
}

const deleteEditTodoSuccess = (state, action, edit) => {
    const updatedTodoItems = _.cloneDeep(state.todoItems);
    let todoIndex
    for (var i = 0; i < updatedTodoItems.length; i++) {
        if (updatedTodoItems[i][`id`] === action.payload.id) {
            todoIndex = i
            break
        }
    }

    if (edit) {
        const updatedTodo = _.cloneDeep(action.payload.newTodo)
        updatedTodo.listID=action.payload.listID
        updatedTodoItems[todoIndex] = _.cloneDeep(updatedTodo)
    } else {
        updatedTodoItems.splice(todoIndex, 1)
    }
    localStorage.setItem('todos',JSON.stringify(updatedTodoItems))
    const newState = {
        ...state,
        todoItems: updatedTodoItems,
        loading: false,
    }

    return newState
}



const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TodoConstants.GET_INITIAL_TODOS:
            state={
                ...state,
                todoItems:action.payload.todos
            }
        //todo as a single component
        case TodoConstants.ADD_NEW_TODO_REQUEST:
        case TodoConstants.DELETE_TODO_REQUEST:
        case TodoConstants.EDIT_TODO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case TodoConstants.ADD_NEW_TODO_FAILURE:
        case TodoConstants.DELETE_TODO_FAILURE:
        case TodoConstants.EDIT_TODO_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            break;


        case TodoConstants.ADD_NEW_TODO_SUCCESS:
            state = addTodoSuccess(state, action)
            break;
        case TodoConstants.DELETE_TODO_SUCCESS:
            state = deleteEditTodoSuccess(state, action, false)
            break;
        case TodoConstants.EDIT_TODO_SUCCESS:
            state = deleteEditTodoSuccess(state, action, true)
            break;

        default: break;
    }
    return state
}

export default TodosReducer