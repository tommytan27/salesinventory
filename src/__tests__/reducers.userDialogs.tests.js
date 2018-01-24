
import userDialogs from './../reducers/userDialogs';
import actionTypes from './../constants/actionTypes';

const assertInitialDialogState = (state, action) => {
    expect(userDialogs(state, action).addUser.open).toBeFalsy();
    expect(userDialogs(state, action).editUser.open).toBeFalsy();
    expect(userDialogs(state, action).editUser.editMode).toBeFalsy();
}

const assertInitialState = (state, action) => {    
    expect(userDialogs(state, action).userInDialog
    .id).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .username.value).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .timeout.value).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .password.value).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .confirmPassword.value).toBeNull();

    expect(userDialogs(state, action).userInDialog
    .username.state).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .timeout.state).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .password.state).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .confirmPassword.state).toBeNull();
}

const dummyUsername = "dummy";
const dummyTimeout = 50;
const dummyPassword = "password";

const dummyUser = {
    id: 0,
    username: dummyUsername,
    timeout: dummyPassword
};

describe('UserDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return add user dialog opened when receiving OPEN_ADD_USER_DIALOG action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }).addUser.open).toBeTruthy();
    });
    it('should return edit user dialog opened but not in edit mode when receiving OPEN_EDIT_USER_DIALOG action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        expect(returnValue.editUser.open).toBeTruthy();
        expect(returnValue.editUser.editMode).toBe(false);
    });
    it('should return add user dialog opened after closed when receiving OPEN_ADD_USER_DIALOG action', () => {
        expect(userDialogs({
            addUser: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }).addUser.open).toBeTruthy();
    });
    it('should return edit user dialog opened after closed when receiving OPEN_EDIT_USER_DIALOG action', () => {
        const returnValue = userDialogs({
            editUser: {
                open: false,
                editMode: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        expect(returnValue.editUser.open).toBeTruthy();
        expect(returnValue.editUser.editMode).toBe(false);
    });
    it('should return selected user record when receiving OPEN_EDIT_USER_DIALOG action', () => {        
        const returnValue = userDialogs({
            editUser: {
                open: false,
                editMode: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        expect(returnValue.editUser.open).toBeTruthy();
        expect(returnValue.editUser.editMode).toBe(false);
        expect(returnValue.userInDialog
            .id).toEqual(dummyUser.id);
        expect(returnValue.userInDialog
            .username.value).toEqual(dummyUser.username);
        expect(returnValue.userInDialog
            .timeout.value).toEqual(dummyUser.timeout);
    });
    it('should return all fields state success when receiving OPEN_EDIT_USER_DIALOG action', () => {        
        const returnValue = userDialogs({
            editUser: {
                open: false,
                editMode: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        expect(returnValue.userInDialog.username.state).toBe("success");
        expect(returnValue.userInDialog.timeout.state).toBe("success");
    });
    it('should return add user dialog closed and initial state of all fields when receiving CLOSE_ADD_USER_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_ADD_USER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit user dialog closed and initial state of all fields when receiving CLOSE_EDIT_USER_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return add user dialog closed and initial state of all fields after opened when receiving CLOSE_ADD_USER_DIALOG action', () => {
        let state = {
            addUser: {
                open: true
            }
        };
        let action = {
            type: actionTypes.CLOSE_ADD_USER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit user dialog closed and initial state of all fields after opened when receiving CLOSE_EDIT_USER_DIALOG action', () => {
        let state = {
            editUser: {
                open: true
            }
        };
        let action = {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        };
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit mode true when receiving ENABLE_EDIT_MODE', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.ENABLE_EDIT_MODE
        }).editUser.editMode).toBeTruthy();
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    it('should return the modified username field with success state when receiving UPDATE_USERNAME_FIELD action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: dummyUsername
        });
        expect(returnValue.userInDialog
            .username.value).toEqual(dummyUsername);
        expect(returnValue.userInDialog
            .username.state).toEqual("success");
    });
    it('should return the empty username field with null state when receiving UPDATE_USERNAME_FIELD action with empty username', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: ""
        });
        expect(returnValue.userInDialog
            .username.value).toEqual("");
        expect(returnValue.userInDialog
            .username.state).toBeNull();
    });
    it('should return the modified timeout field with success state when receiving UPDATE_TIMEOUT_FIELD action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: dummyTimeout
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(50);
        expect(returnValue.userInDialog.timeout.state).toEqual("success");
    });   
    it('should return NaN timeout field with null state when receiving UPDATE_TIMEOUT_FIELD action with empty timeout', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: ""
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(NaN);
        expect(returnValue.userInDialog.timeout.state).toBeNull();
    });  
    it('should return the last valid timeout field with success state when receiving UPDATE_TIMEOUT_FIELD action with invalid timeout', () => {
        const returnValue = userDialogs({
            userInDialog: {
                timeout: {
                    value: 15,
                    state: "success"
                }
            }
        }, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: "15s"
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(15);
        expect(returnValue.userInDialog.timeout.state).toEqual("success");
    }); 
    it('should return NaN or null timeout field with null state when receiving UPDATE_TIMEOUT_FIELD action with invalid timeout from empty', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: "s"
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(NaN);
        expect(returnValue.userInDialog.timeout.state).toBeNull;
    });
    it('should return the modified password field with success state when receiving UPDATE_PASSWORD_FIELD action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        });
        expect(returnValue.userInDialog.password.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.password.state).toEqual("success");
    });
    it('should return the empty password field with null state when receiving UPDATE_PASSWORD_FIELD action with empty password', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: ""
        });
        expect(returnValue.userInDialog.password.value).toEqual("");
        expect(returnValue.userInDialog.password.state).toBeNull();
    });
    it('should return the modified confirm password field with success state when receiving UPDATE_CONFIRM_PASSWORD_FIELD action', () => {
        const returnValue = userDialogs({
            userInDialog: {
                password: {
                    value: dummyPassword
                }
            }
        }, {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        });
        expect(returnValue.userInDialog.confirmPassword.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.confirmPassword.state).toEqual("success");
    });
    it('should return the empty confirm password field with null state when receiving UPDATE_CONFIRM_PASSWORD_FIELD action with empty confirmPassword', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: ""
        });
        expect(returnValue.userInDialog.confirmPassword.value).toEqual("");
        expect(returnValue.userInDialog.confirmPassword.state).toBeNull();
    });
    it('should return the error state when receiving UPDATE_CONFIRM_PASSWORD_FIELD action with differnt confirmPassword to password', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        });
        expect(returnValue.userInDialog.confirmPassword.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.confirmPassword.state).toBe("error");
    });
});