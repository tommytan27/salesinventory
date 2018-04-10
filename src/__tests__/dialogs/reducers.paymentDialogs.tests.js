import paymentDialogs from './../../reducers/dialogs/paymentDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialState = (state, action) => {    
    expect(paymentDialogs(state, action).open).toBeFalsy();
}

describe('PaymentDialog', () => {
    it ('should return the dialog closed at the initial state', () => {
        assertInitialState(undefined, {});
    });
    it ('should return the dialog open when receiving OPEN_LOGIN_DIALOG action', () => {
        var returnValues = paymentDialogs(undefined, {
            type: actionTypes.OPEN_PAYMENT_DIALOG
        });
        expect(returnValues.open).toBeTruthy();
    });
    it ('should return initial state when receiving CLOSE_PAYMENT_DIALOG action', () => {
        assertInitialState(undefined, {
            type: actionTypes.CLOSE_PAYMENT_DIALOG
        })
    });
    it ('should return initial state after opening dialog when receiving CLOSE_PAYMENT_DIALOG action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.CLOSE_PAYMENT_DIALOG
        })
    });
    it ('should return initial state after opening dialog when receiving CHANGE_PAGE_USER_MAIN_MENU action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.CHANGE_PAGE_USER_MAIN_MENU
        })
    });
});