import actionTypes from "../constants/actionTypes";

const initialState = {
    id: 0
}

const activeCustomer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SELECT_CUSTOMER:
            return {...state, id: action.customerId};
        case actionTypes.CHANGE_PAGE_USER_MAIN_MENU:
        case actionTypes.SELECT_ANONYMOUS:
            return initialState;
        default:
            return state;
    }
}

export default activeCustomer;