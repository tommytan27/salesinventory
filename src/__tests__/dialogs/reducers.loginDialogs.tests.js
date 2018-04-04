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
    it ('should return initial state after opening dialog when receiving CHANGE_MODE_ADMIN action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.CHANGE_MODE_ADMIN,
            username: "admin",
            timeout: 10
        })
    });
    it ('should return updated username with success state when receiving UPDATE_CUSTOMER_COMBO action with valid username', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: "admin",
            allUsers: []
        });
        expect(returnValues.userInDialog.username.value).toEqual("admin");
        expect(returnValues.userInDialog.username.state).toEqual("success");
    });
    it ('should return empty username with null state when receiving UPDATE_USERNAME_FIELD action with empty username', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: "",
            allUsers: []
        });
        expect(returnValues.userInDialog.username.value).toEqual("");
        expect(returnValues.userInDialog.username.state).toBeNull();
    });
    it ('should return undefined username with null state when receiving UPDATE_USERNAME_FIELD action with undefined username', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: undefined,
            allUsers: []
        });
        expect(returnValues.userInDialog.username.value).toEqual(undefined);
        expect(returnValues.userInDialog.username.state).toBeNull();
    });
    it ('should return updated password with success state when receiving UPDATE_PASSWORD_FIELD action with valid username', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: "admin"
        });
        expect(returnValues.userInDialog.password.value).toEqual("admin");
        expect(returnValues.userInDialog.password.state).toEqual("success");
    });
    it ('should return empty password with null state when receiving UPDATE_PASSWORD_FIELD action with empty username', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: ""
        });
        expect(returnValues.userInDialog.password.value).toEqual("");
        expect(returnValues.userInDialog.password.state).toBeNull();
    });
    it ('should return undefined password with null state when receiving UPDATE_PASSWORD_FIELD action with undefined username', () => {
        var returnValues = loginDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: undefined
        });
        expect(returnValues.userInDialog.password.value).toEqual(undefined);
        expect(returnValues.userInDialog.password.state).toBeNull();
    });
    it ('should return initial state of error dialog when receiving FAIL_LOGIN_USER action', () => {
        var returnValues = loginDialogs({
            error: false
        }, {
            type: actionTypes.FAIL_LOGIN_USER
        });
        expect(returnValues.error).toBeTruthy();
        expect(returnValues.loginable).toBeFalsy();
        expect(returnValues.userInDialog.username.value).toBeNull();
        expect(returnValues.userInDialog.username.state).toBeNull();
        expect(returnValues.userInDialog.password.value).toBeNull();
        expect(returnValues.userInDialog.password.state).toBeNull();
    });
});