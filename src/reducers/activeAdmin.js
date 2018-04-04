import actionTypes from "../constants/actionTypes";

const initialState = {
    username: null,
    timeout: null
}

const activeAdmin = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_MODE_ADMIN:
            return {...state, username: action.username,
                timeout: action.timeout};
        case actionTypes.CHANGE_MODE_USER:
        case actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT:
            return initialState;
        default:
            return state;
    }
}

export default activeAdmin;