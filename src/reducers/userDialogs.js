import actionTypes from './../constants/actionTypes';

const initialState = {
    addUser: {
        open: false
    },
    editUser: {
        open: false
    }
}

const userDialogs = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.OPEN_ADD_USER_DIALOG:
            return {...state, addUser: {
                open: true
            }};
        case actionTypes.OPEN_EDIT_USER_DIALOG:
            return {...state, editUser: {
                open: true
            }};
        case actionTypes.CLOSE_ADD_USER_DIALOG:
            return {...state, addUser: {
                open: false
            }};
        case actionTypes.CLOSE_EDIT_USER_DIALOG:
            return {...state, editUser: {
                open: false
            }};
        default:
            return state;
    }
}

export default userDialogs;