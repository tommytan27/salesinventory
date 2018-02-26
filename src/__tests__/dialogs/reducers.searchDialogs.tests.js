import searchDialogs from './../../reducers/dialogs/searchDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogModes from './../../constants/dialogModes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialState = (state, action) => {    
    expect(searchDialogs(state, action).open).toBeFalsy();
    expect(searchDialogs(state, action).fromDate).toBeNull();
    expect(searchDialogs(state, action).toDate).toBeNull();
    expect(searchDialogs(state, action).customerId).toBeNull();
}

const dummyName = "name";

const dummyBrand = {
    id: 0,
    name: dummyName,
};

// const assertOpenAddBrandDialog = (state) => {
//     expect(state.dialogState.open).toBeTruthy();
//     expect(state.dialogState.title).toEqual(dialogTitles.ADD_BRAND);
//     expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
//     expect(state.dialogState.editable).toBeTruthy();
// }

describe('searchDialogs', () => {
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
        var returnValues = searchDialogs(undefined, {
            type: actionTypes.OPEN_SEARCH_DIALOG
        });
        expect(returnValues.fromDate).toEqual(today.toLocaleDateString('ja-JP'));
        expect(returnValues.toDate).toEqual(today.toLocaleDateString('ja-JP'));
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
});