import { GetBoard } from "./boards.action"
import { GetLists } from "./lists.action"
import { GetTodos } from "./todos.action"


export const GetInitialData=()=>{
    return dispatch=>{
        dispatch(GetLists())
        dispatch(GetBoard())
        dispatch(GetTodos())
    }
}