import { validateUsername, validatePassword, validateConfirmPassword } from '../utils/validators';
import actionTypes from './../constants/actionTypes';
import dialogTitles from '../constants/dialogTitles';
import dialogModes from '../constants/dialogModes';

const initialState = {
    dialogState: {
        open: false,
        title: "",
        mode: null,
        error: false,
        editable: false
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

const getDialogErrorState = (currentState) => {
    if (currentState.dialogState.mode === dialogModes.ADD_MODE) {
        return (currentState.userInDialog.username.state === "success" &&
        (currentState.userInDialog.password.state === "success" ||
        currentState.userInDialog.password.state === "warning") &&
        currentState.userInDialog.confirmPassword.state === "success" &&
        currentState.userInDialog.timeout.state === "success") ? false : true
    }
    else if (currentState.dialogState.mode === dialogModes.EDIT_MODE) {
        return (currentState.userInDialog.timeout.state === "success") ? false : true;
    }
    return false;
}

const userDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_USER_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                open: true,
                title: dialogTitles.ADD_USER,
                mode: dialogModes.ADD_MODE,
                editable: true
            }};
        case actionTypes.OPEN_EDIT_USER_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                    open: true,
                    title: dialogTitles.EDIT_USER,
                    mode: dialogModes.EDIT_MODE,
                    editable: false
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
        case actionTypes.CLOSE_USER_DIALOG:
            return initialState;
        case actionTypes.ENABLE_EDITABLE:
            return {...state, dialogState: {
                ...state.dialogState, editable: true
            }};
        case actionTypes.UPDATE_USERNAME_FIELD:
            return {...state, userInDialog: {
                ...state.userInDialog, username: {
                    value: action.username,
                    state: action.username ? 
                        validateUsername(action.username, action.allUsers) ? 
                            "success" : "error"
                        : null
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
                    state: action.password ? validatePassword(action.password) : null
                },
                confirmPassword: {
                    ...state.userInDialog.confirmPassword,
                    state: state.userInDialog.confirmPassword ? 
                        validateConfirmPassword(action.password, state.userInDialog.confirmPassword.value)
                        : null
                }
            }};
        case actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD:
            return {...state, userInDialog: {
                ...state.userInDialog, confirmPassword: {
                    value: action.confirmPassword,
                    state: action.confirmPassword ? 
                        validateConfirmPassword(state.userInDialog.password.value, action.confirmPassword)
                        : null
                }
            }};
        case actionTypes.ADD_USER:
            {
                let dialogStateError = getDialogErrorState(state);
                if (dialogStateError) {
                    return {
                        dialogState: {
                            ...state.dialogState,
                            error: dialogStateError
                        },
                        userInDialog: {
                            username: {...state.userInDialog.username,
                                state: state.userInDialog.username.state !== "success" ? "error" : "success"},
                            password: {...state.userInDialog.password,
                                state: (state.userInDialog.password.state !== "success" &&
                                    state.userInDialog.password.state !== "warning") ? "error" : 
                                    state.userInDialog.password.state},
                            confirmPassword: {...state.userInDialog.confirmPassword,
                                state: state.userInDialog.confirmPassword.state !== "success" ? "error" : "success"},
                            timeout: {...state.userInDialog.timeout,
                                state: state.userInDialog.timeout.state !== "success" ? "error" : "success"},
                        }
                    }
                }
                return initialState;
            }
        case actionTypes.SAVE_USER:
            {
                let dialogStateError = getDialogErrorState(state);
                if (dialogStateError) {
                    return {
                        dialogState: {
                            ...state.dialogState,
                            error: dialogStateError
                        },
                        userInDialog: {
                            username: {...state.userInDialog.username,
                                state: state.userInDialog.username.state !== "success" ? "error" : "success"},
                            password: {...state.userInDialog.password,
                                state: (state.userInDialog.password.state !== "success" &&
                                    state.userInDialog.password.state !== "warning") ? "error" : 
                                    state.userInDialog.password.state},
                            confirmPassword: {...state.userInDialog.confirmPassword,
                                state: state.userInDialog.confirmPassword.state !== "success" ? "error" : "success"},
                            timeout: {...state.userInDialog.timeout,
                                state: state.userInDialog.timeout.state !== "success" ? "error" : "success"},
                        }
                    }
                }
                return initialState;
            }
        default:
            return state;
    }
}

export default userDialogs;