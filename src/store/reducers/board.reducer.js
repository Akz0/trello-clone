import { BoardsConstants } from "../actions/constants.action";

const initialState={
    currentBoard:{
        boardID:'user1board1',
        name:'My Board 1',
        bgColor:'#87637c',
        description:'Testing Board',
        userID:'',
    },
    loading:false,
    error:null,
}

const BoardsReducer=(state=initialState,action)=>{
    switch(action.type){
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