import { BoardsConstants } from "../actions/constants.action";

const initialState={
    currentBoard:{
        boardID:'',
        name:'',
        bgColor:'',
        description:'',
        userID:'',
    },
    loading:false,
    error:null,
}

const BoardsReducer=(state=initialState,action)=>{
    switch(action.type){
        case BoardsConstants.GET_INITIAL_BOARD:
            state={
                ...state,
                currentBoard:action.payload.board
            }
        case BoardsConstants.EDIT_BOARD_FAILURE:
            state={
                ...state,
                loading:false,
                error:action.payload.error
            }
            break;
        case BoardsConstants.EDIT_BOARD_SUCCESS:
            state={
                ...state,
                currentBoard:action.payload.newBoard,
                loading:false,
            }
            localStorage.setItem('currentBoard',JSON.stringify(action.payload.newBoard))
            break;
        case BoardsConstants.EDIT_BOARD_REQUEST:
            state={
                ...state,
                loading:true,
            }
            break;
        default: return state;
    }
    return state
}
export default BoardsReducer