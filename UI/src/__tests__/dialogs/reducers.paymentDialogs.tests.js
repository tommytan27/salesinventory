import paymentDialogs from './../../reducers/dialogs/paymentDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialState = (state, action) => {    
    expect(paymentDialogs(state, action).open).toBeFalsy();
    expect(paymentDialogs(state, action).payNow).toBeFalsy();
    expect(paymentDialogs(state, action).total).toBeNull();
    expect(paymentDialogs(state, action).cash).toBeNull();
    expect(paymentDialogs(state, action).change).toBeNull();
    expect(paymentDialogs(state, action).payable).toBeFalsy();
}

describe('PaymentDialog', () => {
    it ('should return the dialog closed at the initial state', () => {
        assertInitialState(undefined, {});
    });
    it ('should return the dialog open when receiving OPEN_LOGIN_DIALOG action', () => {
        var returnValues = paymentDialogs(undefined, {
            type: actionTypes.OPEN_PAYMENT_DIALOG,
            total: "20.50"
        });
        expect(returnValues.open).toBeTruthy();
    });
    it ('should return the total when receiving OPEN_LOGIN_DIALOG action', () => {
        var returnValues = paymentDialogs(undefined, {
            type: actionTypes.OPEN_PAYMENT_DIALOG,
            total: "20.50"
        });
        expect(returnValues.open).toBeTruthy();
        expect(returnValues.total).toEqual("20.50");
    });
    it ('should return initial state when receiving CLOSE_PAYMENT_DIALOG action', () => {
        assertInitialState(undefined, {
            type: actionTypes.CLOSE_PAYMENT_DIALOG
        })
    });
    it ('should return initial state when receiving UPDATE_ITEMS_AND_CUSTOMER action', () => {
        assertInitialState(undefined, {
            type: actionTypes.UPDATE_ITEMS_AND_CUSTOMER,
            items: {}
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
    it ('should return pay now true when receiving PAY_NOW action', () => {
        var returnValues = paymentDialogs(undefined, {
            type: actionTypes.PAY_NOW
        });
        expect(returnValues.payNow).toBeTruthy();
    });
    it ('should return the modified cash when receiving UPDATE_CASH_FIELD action', () => {
        const returnValue = paymentDialogs(undefined, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "20.50"
        });
        expect(returnValue.cash).toEqual("20.50");
    });   
    it ('should return empty cash field when receiving UPDATE_CASH_FIELD action with empty cash', () => {
        const returnValue = paymentDialogs(undefined, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: ""
        });
        expect(returnValue.cash).toEqual("");
    });  
    it ('should return the last valid cash field when receiving UPDATE_CASH_FIELD action with invalid price', () => {
        const returnValue = paymentDialogs({
            cash: "15"
        }, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "15s"
        });
        expect(returnValue.cash).toEqual("15");
    }); 
    it ('should return empty/null cash field when receiving UPDATE_CASH_FIELD action with invalid cash from empty', () => {
        const returnValue = paymentDialogs(undefined, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "s"
        });
        expect(returnValue.cash).toBeNull;
    });
    it ('should return modified cash field including point value when receiving UPDATE_CASH_FIELD action with decimal cash', () => {
        const returnValue = paymentDialogs(undefined, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "20."
        });
        expect(returnValue.cash).toEqual("20.");
    });
    it ('should return modified cash field including decimal value when receiving UPDATE_CASH_FIELD action with decimal cash', () => {
        const returnValue = paymentDialogs(undefined, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "20.2"
        });
        expect(returnValue.cash).toEqual("20.2");
    });    
    it ('should return the payable true when receiving UPDATE_CASH_FIELD action with equal cash to total', () => {
        const returnValue = paymentDialogs({
            total: "20.55",
            cash: "20.5"
        }, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "20.55"
        });
        expect(returnValue.payable).toBeTruthy();
    });    
    it ('should return the payable true when receiving UPDATE_CASH_FIELD action with higher cash than total', () => {
        const returnValue = paymentDialogs({
            total: "20.50",
            cash: "3"
        }, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "30"
        });
        expect(returnValue.payable).toBeTruthy();
    });    
    it ('should return the payable false when receiving UPDATE_CASH_FIELD action with lower cash than total', () => {
        const returnValue = paymentDialogs({
            total: "50.50",
            cash: ""
        }, {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "9"
        });
        expect(returnValue.payable).toBeFalsy();
    });
    it ('should return the change when receiving PAY_CASH action', () => {
        const returnValue = paymentDialogs({
            total: 20.50,
            cash: "30"
        }, {
            type: actionTypes.PAY_CASH
        });
        expect(returnValue.change).toEqual(9.50);
    });
});