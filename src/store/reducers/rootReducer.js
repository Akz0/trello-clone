import { combineReducers } from "redux";
import BoardsReducer from "./board.reducer";
import ListReducer from "./lists.reducer";

const RootReducer=combineReducers({
    lists:ListReducer,
    boards:BoardsReducer
})

export default RootReducer