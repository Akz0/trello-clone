import { ListConstants } from "./constants.action"

const addlist=(name,boardID,bgColor)=>{
    return{
        type:ListConstants.ADD_NEW_LIST_SUCCESS,
        payload:{
            listName:name,
            board:boardID,
            backgroundColor:bgColor,
        }
    }
}
const deleteTodoSuccess=(boardID,listID)=>{
    return {
        type:ListConstants.DELETE_LIST_SUCCESS,
        payload:{
            boardID:boardID,
            listID:listID
        }
    }
}
const editTodoSuccess=(boardID,listID,newList)=>{
    return {
        type:ListConstants.EDIT_LIST_SUCCESS,
        payload:{
            boardID:boardID,
            listID:listID,
            newList:newList,
        }
    }
}


export const CreateNewList=(name,boardID,bgColor)=>{
    return dispatch=>{
        dispatch({type:ListConstants.ADD_NEW_LIST_REQUEST})
        dispatch(addlist(name,boardID,bgColor))
    }
}

export const DeleteList=(boardID,lsitID)=>{
    return dispatch=>{
        dispatch({type:ListConstants.DELETE_LIST_REQUEST})
        dispatch(deleteTodoSuccess(boardID,lsitID))
    }
}

export const EditList=(boardID,listID,newList)=>{
    return dispatch=>{
        dispatch({type:ListConstants.DELETE_LIST_REQUEST})
        dispatch(editTodoSuccess(boardID,listID,newList))
    }
}

