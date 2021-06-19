import _ from 'lodash'
import { TodoConstants } from '../actions/constants.action';

const initialState = {
    todoItems: [
        {
            id: 'l0sw0',
            todo: 'Complete Maths Homework',
            description: '',
            status: `complete`,
            listID: 4455146,
        },
        {
            id: 'l0sw1',
            todo: 'English Essay',
            description: '',
            status: `-`,
            listID: 4455146,
        },
        {
            id: 'l0sw2',
            todo: 'Community Project',
            description: '',
            status: `-`,
            listID: 4455146,
        },
        {
            id: 'l0sw3',
            todo: 'Basketball Practice',
            description: '',
            status: `-`,
            listID: 4455146,
        },
        {
            id: 'l0h0',
            todo: 'Clean Room',
            description: '',
            status: `working`,
            listID: 4455456,
        },
    ],
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
        console.log('edit', todoIndex)
        console.table(action.payload.newTodo)
        const updatedTodo = _.cloneDeep(action.payload.newTodo)
        updatedTodo.listID=action.payload.listID
        updatedTodoItems[todoIndex] = _.cloneDeep(updatedTodo)
    } else {
        updatedTodoItems.splice(todoIndex, 1)
        console.log('delete', todoIndex)
    }

    const newState = {
        ...state,
        todoItems: updatedTodoItems,
        loading: false,
    }

    return newState
}



const TodosReducer = (state = initialState, action) => {
    switch (action.type) {

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