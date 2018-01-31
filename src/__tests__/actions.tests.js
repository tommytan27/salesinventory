import * as actions from './../actions';
import actionTypes from './../constants/actionTypes';

describe('UserRecords Actions', () => {
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

    it('should create an action to add user', () => {
        const expectedAction = {
            type: actionTypes.ADD_USER
        }
        expect(actions.addUser()).toEqual(expectedAction);
    });

    it('should create an action to save user', () => {
        const expectedAction = {
            type: actionTypes.SAVE_USER
        }
        expect(actions.saveUser()).toEqual(expectedAction);
    });
});

describe('CustomerRecords Actions', () => {
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
    
    it('should create an action to close customer dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_CUSTOMER_DIALOG
        }
        expect(actions.closeCustomerDialog()).toEqual(expectedAction);
    });

    it('should create an action to update the firstName field', () => {
        const dummyFirstName = "first";
        const expectedAction = {
            type: actionTypes.UPDATE_FIRSTNAME_FIELD,
            firstName: dummyFirstName
        }
        expect(actions.updateFirstNameField(dummyFirstName)).toEqual(expectedAction);
    });

    it('should create an action to update the lastName field', () => {
        const dummyLastName = "last";
        const expectedAction = {
            type: actionTypes.UPDATE_LASTNAME_FIELD,
            lastName: dummyLastName
        }
        expect(actions.updateLastNameField(dummyLastName)).toEqual(expectedAction);
    });

    it('should create an action to update the contact field', () => {
        const dummyContact = "04259656325";
        const expectedAction = {
            type: actionTypes.UPDATE_CONTACT_FIELD,
            contact: dummyContact
        }
        expect(actions.updateContactField(dummyContact)).toEqual(expectedAction);
    });

    it('should create an action to add customer', () => {
        const expectedAction = {
            type: actionTypes.ADD_CUSTOMER
        }
        expect(actions.addCustomer()).toEqual(expectedAction);
    });

    it('should create an action to save customer', () => {
        const expectedAction = {
            type: actionTypes.SAVE_CUSTOMER
        }
        expect(actions.saveCustomer()).toEqual(expectedAction);
    });
});