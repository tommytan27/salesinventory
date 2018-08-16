import actionTypes from '../../constants/actionTypes';
import dialogTitles from '../../constants/dialogTitles';

const initialState = {
    open: true
}

const selectCustomerDialogs = (state = initialState, action) => {
    var temp;
    switch (action.type) {
        case actionTypes.CHANGE_PAGE_USER_SHOPPING_PAGE:
        case actionTypes.OPEN_SELECT_CUSTOMER_DIALOG:
            return {...state, open: true};
        case actionTypes.SELECT_ANONYMOUS:
        case actionTypes.CLOSE_SELECT_CUSTOMER_DIALOG:
            return {...state, open: false};
        default:
            return state;
    }
}

export default selectCustomerDialogs;