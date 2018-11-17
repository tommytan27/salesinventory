import actionTypes from '../../constants/actionTypes';
import { validateDecimal } from '../../utils/validators';

const initialState = {
    open: false,
    payNow: false,
    total: null,
    cash: null,
    change: null,
    payable: false
}

const getPayable = (state) => {
    return (parseFloat(state.total) <= parseFloat(state.cash));
}

const paymentDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_PAYMENT_DIALOG:
            return { ...state, open: true, total: action.total };
        case actionTypes.CHANGE_PAGE_USER_MAIN_MENU:
        case actionTypes.CLOSE_PAYMENT_DIALOG:
        case actionTypes.UPDATE_ITEMS_AND_CUSTOMER:
            return initialState;
        case actionTypes.PAY_NOW:
            return {...state, payNow: true};
        case actionTypes.UPDATE_CASH_FIELD:
            let temp = {...state, 
                cash: validateDecimal(action.cash) ? action.cash : state.cash
            };
            return {...temp, payable: getPayable(temp)};
        case actionTypes.PAY_CASH:
            return {...state, change: parseFloat(state.cash) - state.total};
        default:
            return state;
    }
}

export default paymentDialogs;