import _ from "lodash"
import { InitialTodoItems } from "../reducers/initialData"
import { TodoConstants } from "./constants.action"

const addTodoSuccess = (name, listID) => {
    return {
        type: TodoConstants.ADD_NEW_TODO_SUCCESS,
        payload: {
            name: name,
            listID: listID
        }
    }
}
export const GetTodos = () => {

    return dispatch => {
        let todos
        if (localStorage.getItem('todos')) {
            todos = JSON.parse(localStorage.getItem('todos'))
        }
        else {
            todos = _.cloneDeep(InitialTodoItems)
            localStorage.setItem('todos', JSON.stringify(todos))
        }
        dispatch({
            type: TodoConstants.GET_INITIAL_TODOS,
            payload: {
                todos: todos
            }
        })
    }

}
const deleteTodoSuccess = (listID, todoID) => {
    return {
        type: TodoConstants.DELETE_TODO_SUCCESS,
        payload: {
            id: todoID,
            listID: listID
        }
    }
}
const editTodoSuccess = (listID, todoID, todoItem) => {
    return {
        type: TodoConstants.EDIT_TODO_SUCCESS,
        payload: {
            id: todoID,
            listID: listID,
            newTodo: todoItem,
        }
    }
}


export const CreateNewTodo = (name, listID) => {
    return dispatch => {
        dispatch({ type: TodoConstants.ADD_NEW_TODO_REQUEST })
        dispatch(addTodoSuccess(name, listID))
    }
}
export const DeleteTodo = (listID, todoID) => {
    return dispatch => {
        dispatch({ type: TodoConstants.DELETE_TODO_REQUEST })
        dispatch(deleteTodoSuccess(listID, todoID))
    }
}
export const EditTodo = (listID, todoID, TodoItem) => {
    return dispatch => {
        dispatch({ type: TodoConstants.EDIT_TODO_REQUEST })
        dispatch(editTodoSuccess(listID, todoID, TodoItem))
    }
}

export const TodoListChange = (fromListID, toListID, TodoItem) => {
    console.log('from ',fromListID)
    console.log('To ',toListID)
    console.table(TodoItem)
    return dispatch => {
        dispatch({ type: TodoConstants.DELETE_TODO_REQUEST })
        dispatch(deleteTodoSuccess(fromListID, TodoItem.id))
        dispatch({
            type: TodoConstants.CHANGE_TODO_LIST,
            payload: {
                listID: toListID,
                todo: TodoItem
            }
        })
    }
}
