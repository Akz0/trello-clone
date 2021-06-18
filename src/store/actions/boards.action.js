import { BoardsConstants } from "./constants.action"

const editBoardSuccess=(boardID,userID,newBoard)=>{

    return {
        type:BoardsConstants.EDIT_BOARD_SUCCESS,
        payload:{
            boardID,
            userID,
            newBoard,
        }
    }
}

export const EditBoard=(boardID,userID,newBoard)=>{
    return dispatch=>{
        dispatch({type:BoardsConstants.EDIT_BOARD_REQUEST})
        dispatch(editBoardSuccess(boardID,userID,newBoard))
    }
}