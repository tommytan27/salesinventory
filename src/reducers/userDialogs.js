import actionTypes from './../constants/actionTypes';

const initialState = {
    addUser: {
        open: false
    },
    editUser: {
        open: false,
        editMode: false
    },
    selectedUser: {
        id: null,
        username: null,
        timeout: null,
        password: null,
        confirmPassword: null
    }
}

const userDialogs = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.OPEN_ADD_USER_DIALOG:
            return {...state, addUser: {
                open: true
            }};
        case actionTypes.OPEN_EDIT_USER_DIALOG:
            return {...state, 
                editUser: {
                    open: true,
                    editMode: false
                },
                selectedUser: action.user
            };
        case actionTypes.CLOSE_ADD_USER_DIALOG:
            return initialState;
        case actionTypes.CLOSE_EDIT_USER_DIALOG:
            return initialState;
        case actionTypes.ENABLE_EDIT_MODE:
            return {...state, editUser: {
                ...state.editUser, editMode: true
            }}
        case actionTypes.UPDATE_USERNAME_FIELD:
            return {...state, selectedUser: {
                ...state.selectedUser, username: action.username
            }};
        case actionTypes.UPDATE_TIMEOUT_FIELD:
            return {...state, selectedUser: {
                ...state.selectedUser, timeout: action.timeout
            }};
        case actionTypes.UPDATE_PASSWORD_FIELD:
            return {...state, selectedUser: {
                ...state.selectedUser, password: action.password
            }};
        case actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD:
            return {...state, selectedUser: {
                ...state.selectedUser, confirmPassword: action.confirmPassword
            }};
        default:
            return state;
    }
}

export default userDialogs;