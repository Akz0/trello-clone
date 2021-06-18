import { TodoConstants } from "./constants.action"

const addTodoSuccess=(name,listID)=>{
    return {
        type:TodoConstants.ADD_NEW_TODO_SUCCESS,
        payload:{
            todoName:name,
            listID:listID
        }
    }
}

const deleteTodoSuccess=(listID,todoID)=>{
    return {
        type:TodoConstants.DELETE_TODO_SUCCESS,
        payload:{
            id:todoID,
            listID:listID
        }
    }
}
const editTodoSuccess=(listID,todoID,todoItem)=>{
    return {
        type:TodoConstants.EDIT_TODO_SUCCESS,
        payload:{
            id:todoID,
            listID:listID,
            newTodo:todoItem,
        }
    }
}


export const CreateNewTodo=(name,listID)=>{
    return dispatch=>{
        dispatch({type:TodoConstants.ADD_NEW_TODO_REQUEST})
        dispatch(addTodoSuccess(name,listID))
    }
}
export const DeleteTodo=(listID,todoID)=>{
    return dispatch=>{
        dispatch({type:TodoConstants.DELETE_TODO_REQUEST})
        dispatch(deleteTodoSuccess(listID,todoID))
    }
}
export const EditTodo=(listID,todoID,TodoItem)=>{
    return dispatch=>{
        dispatch({type:TodoConstants.EDIT_TODO_REQUEST})
        dispatch(editTodoSuccess(listID,todoID,TodoItem))
    }
}