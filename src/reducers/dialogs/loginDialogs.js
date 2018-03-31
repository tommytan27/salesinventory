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

const loginDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_LOGIN_DIALOG:
            return {...state, open: true, timeOutPrompt: false,
                    title: dialogTitles.LOGIN};
        case actionTypes.CLOSE_LOGIN_DIALOG:
            return initialState;
        case actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT:
            return {...state, open: true, timeOutPrompt: true,
                    title: dialogTitles.TIMEOUT};
        default:
            return state;
    }
}

export default loginDialogs;