import { ListConstants, TodoConstants } from '../actions/constants.action'
import _ from "lodash";

const initialState = {
    lists: [
        {
            name: 'School Work',
            boardID: 'user1board1',
            bgColor: '#ffb11a',
            listID: 4455146,
            todoItems: [
                {
                    id: 'l0sw0',
                    todo: 'Complete Maths Homework',
                    completed: false
                },
                {
                    id: 'l0sw1',
                    todo: 'English Essay',
                    completed: false
                },
                {
                    id: 'l0sw2',
                    todo: 'Community Project',
                    completed: false
                },
                {
                    id: 'l0sw3',
                    todo: 'Basketball Practice',
                    completed: false
                },
            ]
        },
        {
            name: 'Home',
            boardID: 'user1board1',
            listID: 4455456,
            bgColor: '#007acc',
            todoItems: [
                {
                    id: 'l0h0',
                    todo: 'Clean Room',
                    completed: false
                },
            ]
        }
    ],
    loading: false,
    error: null,
}


const addListSuccess = (state, action) => {
    const updatedLists = _.cloneDeep(state.lists);
    const newList = {
        name: action.payload.listName,
        boardID: action.payload.board,
        listID: parseInt(Date.now()),
        bgColor: action.payload.backgroundColor,
        todoItems: []
    }
    updatedLists.push(newList)

    const newState = {
        ...state,
        lists: updatedLists,
        loading: false,
    }
    
    return newState
}

const addTodoSuccess = (state, action) => {
    const updatedLists = _.cloneDeep(state.lists);
    let listIndex
    for (var i = 0; i < updatedLists.length; i++){
        if (updatedLists[i][`listID`] === action.payload.listID)
            listIndex=i;
    }
    
    const newTodo = {
        id: Math.random(),
        todo: action.payload.todoName,
        completed: false
    }
    updatedLists[listIndex].todoItems.push(newTodo)
    
    const newState = {
        ...state,
        lists: updatedLists,
        loading: false,
    }
    
    return newState
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ListConstants.ADD_NEW_LIST_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case ListConstants.ADD_NEW_LIST_SUCCESS:
            state=addListSuccess(state, action)
            break;
        case ListConstants.ADD_NEW_LIST_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;


        case TodoConstants.ADD_NEW_TODO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case TodoConstants.ADD_NEW_TODO_SUCCESS:
            state= addTodoSuccess(state, action)
            break;
        case TodoConstants.ADD_NEW_TODO_FAILURE:
            state = {
                ...state,
                loading: false,

            }
            break;
        default:  break;    
    }
    return state
}
export default ListReducer