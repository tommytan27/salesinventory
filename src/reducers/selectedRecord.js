import actionTypes from './../constants/actionTypes';

const initialState = {
    user: 0
}

const selectedRecord = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.OPEN_EDIT_USER_DIALOG:
            return {...state, user: action.userID};
        default:
            return state;
    }
}

export default selectedRecord;