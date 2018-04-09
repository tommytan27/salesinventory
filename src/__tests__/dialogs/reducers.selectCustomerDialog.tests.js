import selectCustomerDialogs from './../../reducers/dialogs/selectCustomerDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialState = (state, action) => {    
    expect(selectCustomerDialogs(state, action).open).toBeTruthy();
}

describe('SelectCustomerDialog', () => {
    it ('should return dialog open at the initial state', () => {
        assertInitialState(undefined, {});
    });
    it ('should return the dialog open when receiving OPEN_SELECT_CUSTOMER_DIALOG action', () => {
        var returnValues = selectCustomerDialogs({
            open: false
        }, {
            type: actionTypes.OPEN_SELECT_CUSTOMER_DIALOG
        });
        expect(returnValues.open).toBeTruthy();
    });    
    it ('should return the dialog open when receiving CHANGE_PAGE_USER_SHOPPING_PAGE action', () => {
        var returnValues = selectCustomerDialogs({
            open: false
        }, {
            type: actionTypes.CHANGE_PAGE_USER_SHOPPING_PAGE
        });
        expect(returnValues.open).toBeTruthy();
    });
    it ('should return dialog close when receiving CLOSE_SELECT_CUSTOMER_DIALOG action', () => {
        expect(selectCustomerDialogs(undefined, {
            type: actionTypes.CLOSE_SELECT_CUSTOMER_DIALOG
        }).open).toBeFalsy();
    });
    it ('should return dialog close when receiving SELECT_ANONYMOUS action', () => {
        expect(selectCustomerDialogs(undefined, {
            type: actionTypes.SELECT_ANONYMOUS
        }).open).toBeFalsy();
    });
});