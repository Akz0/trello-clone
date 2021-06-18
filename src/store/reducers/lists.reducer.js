import { ListConstants, TodoConstants } from '../actions/constants.action'
import _ from "lodash";

const initialState = {
    lists: [
        {
            name: 'School Work',
            boardID: 'user1board1',
            bgColor: '#ffb11a',
            listID: 4455146,
            description: '',
            todoItems: [
                {
                    id: 'l0sw0',
                    todo: 'Complete Maths Homework',
                    description: '',
                    status: `complete`
                },
                {
                    id: 'l0sw1',
                    todo: 'English Essay',
                    description: '',
                    status: `-`
                },
                {
                    id: 'l0sw2',
                    todo: 'Community Project',
                    description: '',
                    status: `-`
                },
                {
                    id: 'l0sw3',
                    todo: 'Basketball Practice',
                    description: '',
                    status: `-`
                },
            ]
        },
        {
            name: 'Home',
            boardID: 'user1board1',
            listID: 4455456,
            bgColor: '#007acc',
            description: '',
            todoItems: [
                {
                    id: 'l0h0',
                    todo: 'Clean Room',
                    description: '',
                    status: `-`
                },
            ]
        }
    ],
    loading: false,
    error: null,
}

const findListIndex = (lists, id) => {
    for (var i = 0; i < lists.length; i++) {
        if (lists[i][`listID`] === id) {
            return i
        }
    }
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
    let listIndex = findListIndex(updatedLists, action.payload.listID)
    const newTodo = {
        id: Math.random(),
        todo: action.payload.todoName,
        description: '',
        status: '-'
    }
    updatedLists[listIndex].todoItems.push(newTodo)

    const newState = {
        ...state,
        lists: updatedLists,
        loading: false,
    }

    return newState
}

const deleteEditTodoSuccess = (state, action, edit) => {
    const updatedLists = _.cloneDeep(state.lists);
    let listIndex = findListIndex(updatedLists, action.payload.listID)
    const updatedTodoItems = _.cloneDeep(updatedLists[listIndex].todoItems)
    let todoIndex
    for (var i = 0; i < updatedTodoItems.length; i++) {
        if (updatedTodoItems[i][`id`] === action.payload.id) {
            todoIndex = i
            break
        }
    }
    if (edit) {
        const updatedTodo = _.cloneDeep(action.payload.newTodo)
        updatedTodoItems[todoIndex] = _.cloneDeep(updatedTodo)
    } else {
        updatedTodoItems.splice(todoIndex, 1)
    }

    updatedLists[listIndex].todoItems = updatedTodoItems
    const newState = {
        ...state,
        lists: updatedLists,
        loading: false,
    }

    return newState
}

const deleteEditListSuccess = (state, action, edit) => {
    const updatedLists = _.cloneDeep(state.lists);
    const listIndex = findListIndex(updatedLists, action.payload.listID)
    if (edit) {
        const newList=_.cloneDeep(action.payload.newList)
        newList.todoItems=_.cloneDeep(updatedLists[listIndex].todoItems)
        newList.boardID=action.payload.boardID
        newList.listID=action.payload.listID
        updatedLists[listIndex]=_.cloneDeep(newList)
    } else {
        updatedLists.splice(listIndex, 1)
    }

    const newState = {
        ...state,
        lists: updatedLists,
        loading: false,
    }

    return newState
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        // list as whole themselves
        case ListConstants.ADD_NEW_LIST_FAILURE:
        case ListConstants.EDIT_LIST_FAILURE:
        case ListConstants.DELETE_LIST_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case ListConstants.EDIT_LIST_REQUEST:
        case ListConstants.ADD_NEW_LIST_REQUEST:
        case ListConstants.DELETE_LIST_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case ListConstants.ADD_NEW_LIST_SUCCESS:
            state = addListSuccess(state, action)
            break;
        case ListConstants.EDIT_LIST_SUCCESS:
            state = deleteEditListSuccess(state, action, true)
            break;
        case ListConstants.DELETE_LIST_SUCCESS:
            state = deleteEditListSuccess(state, action, false)
            break;




        //todo as a single component
        case TodoConstants.ADD_NEW_TODO_REQUEST:
        case TodoConstants.DELETE_TODO_REQUEST:
        case TodoConstants.EDIT_TODO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case TodoConstants.ADD_NEW_TODO_FAILURE:
        case TodoConstants.DELETE_TODO_FAILURE:
        case TodoConstants.EDIT_TODO_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            break;


        case TodoConstants.ADD_NEW_TODO_SUCCESS:
            state = addTodoSuccess(state, action)
            break;
        case TodoConstants.DELETE_TODO_SUCCESS:
            state = deleteEditTodoSuccess(state, action, false)
            break;
        case TodoConstants.EDIT_TODO_SUCCESS:
            state = deleteEditTodoSuccess(state, action, true)
            break;

        default: break;
    }
    return state
}
export default ListReducer