import { ListConstants, TodoConstants } from "./constants.action"

export const addlist=(name,boardID,bgColor)=>{
    return{
        type:ListConstants.ADD_NEW_LIST_SUCCESS,
        payload:{
            listName:name,
            board:boardID,
            backgroundColor:bgColor,
        }
    }
}
export const addTodo=(name,listID)=>{
    return {
        type:TodoConstants.ADD_NEW_TODO_SUCCESS,
        payload:{
            todoName:name,
            listID:listID
        }
    }
}

export const CreateNewList=(name,boardID,bgColor)=>{
    return dispatch=>{
        dispatch({type:ListConstants.ADD_NEW_LIST_REQUEST})
        dispatch(addlist(name,boardID,bgColor))
    }
}
export const CreateNewTodo=(name,listID)=>{
    return dispatch=>{
        dispatch({type:TodoConstants.ADD_NEW_TODO_REQUEST})
        dispatch(addTodo(name,listID))
    }
}