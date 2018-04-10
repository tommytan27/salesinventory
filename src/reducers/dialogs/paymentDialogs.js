import actionTypes from '../../constants/actionTypes';

const initialState = {
    open: false
}

const paymentDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_PAYMENT_DIALOG:
            return { ...state, open: true };
        case actionTypes.CHANGE_PAGE_USER_MAIN_MENU:
        case actionTypes.CLOSE_PAYMENT_DIALOG:
            return initialState;
        default:
            return state;
    }
}

export default paymentDialogs;