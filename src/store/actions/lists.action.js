import _ from "lodash"
import { InitialLists } from "../reducers/initialData"
import { ListConstants, TodoConstants } from "./constants.action"

const addlist = (name, boardID, bgColor,id) => {
    return {
        type: ListConstants.ADD_NEW_LIST_SUCCESS,
        payload: {
            listName: name,
            board: boardID,
            id:id,
            backgroundColor: bgColor,
        }
    }
}
const deleteTodoSuccess = (boardID, listID) => {
    return {
        type: ListConstants.DELETE_LIST_SUCCESS,
        payload: {
            boardID: boardID,
            listID: listID
        }
    }
}
const editTodoSuccess = (boardID, listID, newList) => {
    return {
        type: ListConstants.EDIT_LIST_SUCCESS,
        payload: {
            boardID: boardID,
            listID: listID,
            newList: newList,
        }
    }
}

export const GetLists = () => {
    return dispatch => {
        let lists
        if (localStorage.getItem('lists')) {
            lists = JSON.parse(localStorage.getItem('lists'))
        }
        else {
            lists = _.cloneDeep(InitialLists)
            localStorage.setItem('lists',JSON.stringify(lists))
        }
        dispatch({
            type: ListConstants.GET_INITIAL_LISTS,
            payload: {
                lists: lists
            }
        })
    }
}

export const CreateNewList = (name, boardID, bgColor) => {
    const id=parseInt(Date.now()).toString()
    return dispatch => {
        dispatch({ type: ListConstants.ADD_NEW_LIST_REQUEST })
        dispatch(addlist(name, boardID, bgColor,id))
        dispatch({
            type:TodoConstants.ADD_NEW_TODO_LIST,
            payload:{
                listID:id
            }
        })
    }
}

export const DeleteList = (boardID, listID) => {
    return dispatch => {
        dispatch({ type: ListConstants.DELETE_LIST_REQUEST })
        dispatch(deleteTodoSuccess(boardID, listID))
        dispatch({
            type:TodoConstants.DELETE_TODO_LIST,
            payload:{
                listID:listID,
            }
        })
    }
}

export const EditList = (boardID, listID, newList) => {
    return dispatch => {
        dispatch({ type: ListConstants.DELETE_LIST_REQUEST })
        dispatch(editTodoSuccess(boardID, listID, newList))
    }
}

