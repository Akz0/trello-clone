import { combineReducers } from "redux";
import BoardsReducer from "./board.reducer";
import ListReducer from "./lists.reducer";
import TodosReducer from "./todos.reducer";

const RootReducer=combineReducers({
    lists:ListReducer,
    boards:BoardsReducer,
    todoItems:TodosReducer
})

export default RootReducer