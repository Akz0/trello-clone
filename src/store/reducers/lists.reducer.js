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
        },
        {
            name: 'Home',
            boardID: 'user1board1',
            listID: 4455456,
            bgColor: '#007acc',
            description: '',
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
    }
    return state
}
export default ListReducer