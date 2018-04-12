import actionTypes from '../../constants/actionTypes';
import dialogTitles from '../../constants/dialogTitles';

const initialState = {
    open: false,
    title: null,
    error: false,
    timeOutPrompt: false,
    loginable: false,
    userInDialog: {
        username: {
            value: null,
            state: null
        },
        password: {
            value: null,
            state: null
        }
    }
}

const getLoginable = (state) => {
    let userInDialog = state.userInDialog;
    return userInDialog.username.state === "success" &&
        userInDialog.password.state === "success";
}

const loginDialogs = (state = initialState, action) => {
    var temp;
    switch (action.type) {
        case actionTypes.OPEN_LOGIN_DIALOG:
            return {...state, open: true, timeOutPrompt: false,
                    title: dialogTitles.LOGIN};
        case actionTypes.CHANGE_MODE_ADMIN:
        case actionTypes.CLOSE_LOGIN_DIALOG:
            return initialState;
        case actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT:
            return {...state, open: true, timeOutPrompt: true,
                    title: dialogTitles.TIMEOUT};
        case actionTypes.UPDATE_USERNAME_FIELD:
            temp = {...state, userInDialog: {...state.userInDialog,
                username: {
                    value: action.username,
                    state: action.username ? "success" : null
                }}};
            return {...temp, loginable: getLoginable(temp)};
        case actionTypes.UPDATE_PASSWORD_FIELD:
            temp = {...state, userInDialog: {...state.userInDialog,
                password: {
                    value: action.password,
                    state: action.password ? "success" : null
                }}}
            return {...temp, loginable: getLoginable(temp)};
        case actionTypes.FAIL_LOGIN_USER:
            return {...state, error: true, loginable: false,
                userInDialog: {
                    username: { value: null, state: null },
                    password: { value: null, state: null }
                }};
        case actionTypes.CHANGE_MODE_USER:
            return initialState
        default:
            return state;
    }
}

export default loginDialogs;