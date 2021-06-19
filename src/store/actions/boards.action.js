import _ from "lodash"
import { InitialCurrentBoard } from "../reducers/initialData"
import { BoardsConstants } from "./constants.action"

const editBoardSuccess = (boardID, userID, newBoard) => {

    return {
        type: BoardsConstants.EDIT_BOARD_SUCCESS,
        payload: {
            boardID,
            userID,
            newBoard,
        }
    }
}

export const GetBoard = () => {
    return dispatch => {
        let board
        if (localStorage.getItem('currentBoard')) {
            board = JSON.parse(localStorage.getItem('currentBoard'))
        }
        else {
            board = _.cloneDeep(InitialCurrentBoard)
            localStorage.setItem('currentBoard',JSON.stringify(board))
        }
        dispatch({
            type: BoardsConstants.GET_INITIAL_BOARD,
            payload: {
                board: board
            }
        })
    }
}

export const EditBoard = (boardID, userID, newBoard) => {
    return dispatch => {
        dispatch({ type: BoardsConstants.EDIT_BOARD_REQUEST })
        dispatch(editBoardSuccess(boardID, userID, newBoard))
    }
}