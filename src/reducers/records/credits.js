import actionTypes from './../../constants/actionTypes';

const credits = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_CREDIT:
            return [...state, action.credit];
        default:
            return state;
    }
}

export default credits;