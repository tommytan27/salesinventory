import * as actions from './../actions';
import actionTypes from './../constants/actionTypes';

describe('Actions', () => {
    it('should create an action to open add user dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }
        expect(actions.openAddUserDialog()).toEqual(expectedAction);
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
        expect(actions.openEditUserDialog(dummyUser)).toEqual(expectedAction);
    });

    it('should create an action to close user dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_USER_DIALOG
        }
        expect(actions.closeUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to enable editable', () => {
        const expectedAction = {
            type: actionTypes.ENABLE_EDITABLE
        }
        expect(actions.enableEditable()).toEqual(expectedAction);
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
        expect(actions.updateUsernameField(dummyUsername, dummyUsers)).toEqual(expectedAction);
    });
    
    it('should create an action to update the timeout field', () => {
        const dummyTimeout = 50;
        const expectedAction = {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: dummyTimeout
        }
        expect(actions.updateTimeoutField(dummyTimeout)).toEqual(expectedAction);
    });
    
    it('should create an action to update the password field', () => {
        const dummyPassword = "password";
        const expectedAction = {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        }
        expect(actions.updatePasswordField(dummyPassword)).toEqual(expectedAction);
    });
    
    it('should create an action to update the confirm password field', () => {
        const dummyPassword = "password";
        const expectedAction = {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        }
        expect(actions.updateConfirmPasswordField(dummyPassword)).toEqual(expectedAction);
    });

    it('should create an action to open add customer dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
        }
        expect(actions.openAddCustomerDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit customer dialog', () => {
        const dummyCustomer = {
            id: 123,
            firstName: "first",
            lastName: "last",
            contact: "0425297556",
            credit: 10.0
        };
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer
        }
        expect(actions.openEditCustomerDialog(dummyCustomer)).toEqual(expectedAction);
    });
});