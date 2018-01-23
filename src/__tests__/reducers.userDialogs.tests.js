
import userDialogs from './../reducers/userDialogs';
import actionTypes from './../constants/actionTypes';

const assertInitialDialogState = (state, action) => {
    expect(userDialogs(state, action).addUser.open).toBeFalsy();
    expect(userDialogs(state, action).editUser.open).toBeFalsy();
    expect(userDialogs(state, action).editUser.editMode).toBeFalsy();
}

const assertInitialState = (state, action) => {    
    expect(userDialogs(state, action).selectedUser.id).toBeNull();
    expect(userDialogs(state, action).selectedUser.username).toBeNull();
    expect(userDialogs(state, action).selectedUser.timeout).toBeNull();
    expect(userDialogs(state, action).selectedUser.password).toBeNull();
    expect(userDialogs(state, action).selectedUser.confirmPassword).toBeNull();
}

const dummyUser = {
    id: 0,
    username: "dummy",
    timeout: 50
};

const dummyTimeout = 50;

const dummyPassword = "password";

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
        expect(returnValue.selectedUser).toEqual(dummyUser);
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
    it('should return the modified username field when receiving UPDATE_USERNAME_FIELD action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: dummyUser
        }).selectedUser.username).toEqual(dummyUser);
    });
    it('should return the modified timeout field when receiving UPDATE_TIMEOUT_FIELD action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: dummyTimeout
        }).selectedUser.timeout).toEqual(50);
    });    
    it('should return the modified password field when receiving UPDATE_PASSWORD_FIELD action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        }).selectedUser.password).toEqual(dummyPassword);
    });
    it('should return the modified confirm password field when receiving UPDATE_CONFIRM_PASSWORD_FIELD action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        }).selectedUser.confirmPassword).toEqual(dummyPassword);
    });
});