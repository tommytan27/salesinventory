import * as salesInventoryActions from './../actions';
import actionTypes from './../constants/actionTypes';

describe('SalesInventoryActions', () => {
    it('should create an action to open add user dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }
        expect(salesInventoryActions.openAddUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to close add user dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_ADD_USER_DIALOG
        }
        expect(salesInventoryActions.closeAddUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit user dialog', () => {
        const dummyUser = {
            id: 123,
            username: "dummy",
            timeout: 10
        };
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        }
        expect(salesInventoryActions.openEditUserDialog(dummyUser)).toEqual(expectedAction);
    });

    it('should create an action to close edit user dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        }
        expect(salesInventoryActions.closeEditUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to enable edit mode', () => {
        const expectedAction = {
            type: actionTypes.ENABLE_EDIT_MODE
        }
        expect(salesInventoryActions.enableEditMode()).toEqual(expectedAction);
    });

    it('should create an action to update the username field', () => {
        const dummyUsername = "dummy";
        const dummyUsers = [
            {id: 1, username: "admin", timeout: 10},
            {id: 2, username: "ttanzil", timeout: 10},
            {id: 3, username: "hwinarto", timeout: 10}
        ];
        const expectedAction = {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: dummyUsername,
            allUsers: dummyUsers
        }
        expect(salesInventoryActions.updateUsernameField(dummyUsername, dummyUsers)).toEqual(expectedAction);
    });
    
    it('should create an action to update the timeout field', () => {
        const dummyTimeout = 50;
        const expectedAction = {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: dummyTimeout
        }
        expect(salesInventoryActions.updateTimeoutField(dummyTimeout)).toEqual(expectedAction);
    });
    
    it('should create an action to update the password field', () => {
        const dummyPassword = "password";
        const expectedAction = {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        }
        expect(salesInventoryActions.updatePasswordField(dummyPassword)).toEqual(expectedAction);
    });
    
    it('should create an action to update the confirm password field', () => {
        const dummyPassword = "password";
        const expectedAction = {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        }
        expect(salesInventoryActions.updateConfirmPasswordField(dummyPassword)).toEqual(expectedAction);
    });
});