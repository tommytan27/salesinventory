import loginDialogs from './../../reducers/dialogs/loginDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialState = (state, action) => {    
    expect(loginDialogs(state, action).open).toBeFalsy();
    expect(loginDialogs(state, action).title).toBeNull();
    expect(loginDialogs(state, action).error).toBeFalsy();
    expect(loginDialogs(state, action).timeOutPrompt).toBeFalsy();
    expect(loginDialogs(state, action).loginable).toBeFalsy();
    expect(loginDialogs(state, action).userInDialog.username.value).toBeNull();
    expect(loginDialogs(state, action).userInDialog.username.state).toBeNull();
    expect(loginDialogs(state, action).userInDialog.password.value).toBeNull();
    expect(loginDialogs(state, action).userInDialog.password.state).toBeNull();
}

describe('LoginDialogs', () => {
    it ('should return all null values at the initial state', () => {
        assertInitialState(undefined, {});
    });
    it ('should return the dialog open with login title when receiving OPEN_LOGIN_DIALOG action', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.OPEN_LOGIN_DIALOG
        });
        expect(returnValues.open).toBeTruthy();
        expect(returnValues.timeOutPrompt).toBeFalsy();
        expect(returnValues.title).toBe(dialogTitles.LOGIN);
    });
    it ('should return the dialog open with timeout title when receiving CHANGE_MODE_USER_DUE_TIMEOUT action', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
        });
        expect(returnValues.open).toBeTruthy();
        expect(returnValues.timeOutPrompt).toBeTruthy();
        expect(returnValues.title).toBe(dialogTitles.TIMEOUT);
    });
    it ('should return initial state when receiving CLOSE_LOGIN_DIALOG action', () => {
        assertInitialState(undefined, {
            type: actionTypes.CLOSE_LOGIN_DIALOG
        })
    });
    it ('should return initial state after opening dialog when receiving CLOSE_LOGIN_DIALOG action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.CLOSE_LOGIN_DIALOG
        })
    });
    // it ('should return updated customerId when receiving UPDATE_CUSTOMER_COMBO action with valid customer Id', () => {
    //     var returnValues = loginDialogs(undefined, {
    //         type: actionTypes.UPDATE_CUSTOMER_COMBO,
    //         customerId: 2
    //     });
    //     expect(returnValues.customerId).toEqual(2);
    // });
    // it ('should return the dialog open when receiving CHANGE_PAGE_ADMIN_RECORDS_HISTORY action', () => {
    //     var returnValues = loginDialogs(undefined, {
    //         type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
    //     });
    //     expect(returnValues.open).toBeTruthy();
    // });
});