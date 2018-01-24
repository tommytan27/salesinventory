import actionTypes from './../constants/actionTypes';

const initialState = {
    addUser: {
        open: false
    },
    editUser: {
        open: false,
        editMode: false
    },
    userInDialog: {
        id: null,
        username: {
            value: null,
            state: null
        },
        timeout: {
            value: null,
            state: null
        },
        password: {
            value: null,
            state: null
        },
        confirmPassword: {
            value: null,
            state: null
        }
    }
}

const userDialogs = (state = initialState, action) => {
    switch (action.type) {
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
                userInDialog: {
                    ...state.userInDialog,
                    id: action.user.id,
                    username: {
                        value: action.user.username,
                        state: "success"
                    },
                    timeout: {
                        value: action.user.timeout,
                        state: "success"
                    }
                }
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
            return {...state, userInDialog: {
                ...state.userInDialog, username: {
                    value: action.username,
                    //NEED TO VALIDATE USERNAME
                    state: action.username ? "success" : null
                }
            }};
        case actionTypes.UPDATE_TIMEOUT_FIELD:
            return {...state, userInDialog: {
                ...state.userInDialog, timeout: {
                    value: Number.parseInt(action.timeout),
                    state: Number.parseInt(action.timeout) ? "success" : null
                }
            }};
        case actionTypes.UPDATE_PASSWORD_FIELD:
            return {...state, userInDialog: {
                ...state.userInDialog, password: {
                    value: action.password,
                    //NEED TO CHECK THE STRENGTH OF THE PASSWORD AND UPDATE CONFIRM PASSWORD STATE TOO
                    state: action.password ? "success" : null
                }
            }};
        case actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD:
            return {...state, userInDialog: {
                ...state.userInDialog, confirmPassword: {
                    value: action.confirmPassword,
                    state: action.confirmPassword ? 
                        action.confirmPassword === state.userInDialog.password.value ? "success" : "error"
                        : null
                }
            }};
        default:
            return state;
    }
}

export default userDialogs;