import * as actionTypes from './actionTypes'
//for adding todo item
export const addItem = () => {
    return{
        type: actionTypes.ADD_ITEM,
    }
}
//for deleting item
export const deleteItem = (item) => {
    return{
        type: actionTypes.DELETE_ITEM,
        item: item
    }
}
//for editing todo item
export const editItem = (item) => {
    return{
        type: actionTypes.EDIT_ITEM,
        item: item
    }
}
//for storing the input of the title text field
export const setTitle = (title) => {
    return{
        type: actionTypes.SET_TITLE,
        title: title
    }
}
// for setting the error in the text field if empty
export const setError = (error) => {
    return{
        type: actionTypes.SET_ERROR,
        error: error
    }
}
//for stroring the selected item during edit or delete
export const setItem = (item) => {
    return{
        type: actionTypes.SET_ITEM,
        item: item
    }
}
//As same form is used for both add and edit, this flag is used to denote the edit process
export const setEdit = () => {
    return{
        type: actionTypes.SET_EDIT
    }
}
