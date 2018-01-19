import actionTypes from './../constants/actionTypes';

const initialState = {
    editUser: {
        open: false
    }
}

const dialogs = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.OPEN_EDIT_USER_DIALOG:
            return {...state, editUser: {
                open: true
            }}
        case actionTypes.CLOSE_EDIT_USER_DIALOG:
            return {...state, editUser: {
                open: false
            }};
        default:
            return state;
    }
}

export default dialogs;