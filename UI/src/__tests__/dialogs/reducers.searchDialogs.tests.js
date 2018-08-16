import searchDialogs from './../../reducers/dialogs/searchDialogs';
import actionTypes from './../../constants/actionTypes';

const assertInitialState = (state, action) => {    
    expect(searchDialogs(state, action).open).toBeFalsy();
    expect(searchDialogs(state, action).fromDate).toBeNull();
    expect(searchDialogs(state, action).toDate).toBeNull();
    expect(searchDialogs(state, action).customerId).toBeNull();
}

describe('SearchDialogs', () => {
    it ('should return all null values at the initial state', () => {
        assertInitialState(undefined, {});
    });
    it ('should return the dialog open when receiving OPEN_SEARCH_DIALOG action', () => {
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.OPEN_SEARCH_DIALOG
        });
        expect(returnValues.open).toBeTruthy();
    });
    it ('should return the dialog with fromDate and toDate set to today when receiving OPEN_SEARCH_DIALOG action', () => {
        var today = new Date();
        var year = today.getFullYear(), month = today.getMonth();
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.OPEN_SEARCH_DIALOG
        });
        expect(returnValues.fromDate).toEqual(new Date(year, month, 1).toLocaleDateString("en-ZA"));
        expect(returnValues.toDate).toEqual(today.toLocaleDateString("en-ZA"));
    });
    it ('should return the dialog with customer set to -1 when receiving OPEN_SEARCH_DIALOG action', () => {
        var today = new Date();
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.OPEN_SEARCH_DIALOG
        });
        expect(returnValues.customerId).toEqual(-1);
    });
    it ('should return initial state when receiving CLOSE_SEARCH_DIALOG action', () => {
        assertInitialState(undefined, {
            type: actionTypes.CLOSE_SEARCH_DIALOG
        })
    });
    it ('should return initial state after opening dialog when receiving CLOSE_SEARCH_DIALOG action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.CLOSE_SEARCH_DIALOG
        })
    });
    it ('should return initial state after opening dialog when receiving UPDATE_RECORDS action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.UPDATE_RECORDS
        })
    });
    it ('should return updated customerId when receiving UPDATE_CUSTOMER_COMBO action with valid customer Id', () => {
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.UPDATE_CUSTOMER_COMBO,
            customerId: 2
        });
        expect(returnValues.customerId).toEqual(2);
    });
    it ('should return updated fromDate when receiving UPDATE_FROM_DATE_FIELD action with valid fromDate', () => {
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.UPDATE_FROM_DATE_FIELD,
            fromDate: "2018/02/2018"
        });
        expect(returnValues.fromDate).toEqual("2018/02/2018");
    });
    it ('should return updated toDate when receiving UPDATE_TO_DATE_FIELD action with valid toDate', () => {
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.UPDATE_TO_DATE_FIELD,
            toDate: "2018/02/2018"
        });
        expect(returnValues.toDate).toEqual("2018/02/2018");
    });
    it ('should return the dialog open when receiving CHANGE_PAGE_ADMIN_RECORDS_HISTORY action', () => {
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
        });
        expect(returnValues.open).toBeTruthy();
    });
});