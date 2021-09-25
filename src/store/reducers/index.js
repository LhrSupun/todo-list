import { act } from 'react-dom/test-utils'
import * as actionTypes from '../actions/actionTypes'

// Declaring states
const initialState = {
    items: [],
    title: "",
    item: "",
    edit: false,
    error: ""
}

//declaring functions
const items = (state = initialState, action) => {
    switch (action.type) {
        //ADD_ITEM
        //Date.now() function to generate unique ids, and concatenated new item to old state
        case actionTypes.ADD_ITEM:
            const newitem = {
                id: Date.now(),
                value: state.title,
            }
            return {
                ...state,
                items: state.items.concat(newitem),
                title: "",
                error: ""
            }
        //EDIT_ITEM
        case actionTypes.EDIT_ITEM:
            let newList = [...state.items];
            let index = newList.indexOf(state.item);
            if (index !== -1) {
                newList [index].value = state.title;
                return {
                    ...state,
                    title: "",
                    edit: false,
                    items: newList,
                    error: ""
                }
            } else {
                return {
                    ...state
                }
            }
        //DELETE_ITEM
        case actionTypes.DELETE_ITEM:
            newList = [...state.items];
            index = newList.indexOf(state.item);
            if (index !== -1) {
                newList.splice(index, 1);
                return {
                    ...state,items: newList
                }

            } else {
                return {
                    ...state
                }
            }
        //SET_TITLE
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        //SET_ITEM
        //clicked item is stored in state
        case actionTypes.SET_ITEM:
            return {
                ...state,
                item: action.item,
                error: ""
            }
        //SET_ERROR
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        //SET_EDIT
        case actionTypes.SET_EDIT:
            return {
                ...state,
                edit: true,
                error: ""
            }
        default:
            return state;
    }
}

export default items;

