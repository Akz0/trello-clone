const initialState={
    boardID:'user1board1',
    boardName:'My Board 1',
    loading:false,
    error:null,
}

const BoardsReducer=(state=initialState,action)=>{
    switch(action.type){
        default: return state;
    }
}
export default BoardsReducer