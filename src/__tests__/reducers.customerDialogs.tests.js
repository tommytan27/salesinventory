import customerDialogs from './../reducers/customerDialogs';
import actionTypes from './../constants/actionTypes';
import dialogModes from './../constants/dialogModes';
import dialogTitles from './../constants/dialogTitles';

const assertInitialDialogState = (state, action) => {
    expect(customerDialogs(state, action).dialogState.open).toBeFalsy();
    expect(customerDialogs(state, action).dialogState.title).toEqual("");
    expect(customerDialogs(state, action).dialogState.mode).toBeNull();
    expect(customerDialogs(state, action).dialogState.editable).toEqual(false);
}

const assertInitialState = (state, action) => {    
    expect(customerDialogs(state, action).customerInDialog
    .id).toBeNull();
    expect(customerDialogs(state, action).customerInDialog
    .firstName.value).toBeNull();
    expect(customerDialogs(state, action).customerInDialog
    .lastName.value).toBeNull();
    expect(customerDialogs(state, action).customerInDialog
    .contact.value).toBeNull();
    expect(customerDialogs(state, action).customerInDialog
    .credit).toBeNull();

    expect(customerDialogs(state, action).customerInDialog
    .firstName.state).toBeNull();
    expect(customerDialogs(state, action).customerInDialog
    .lastName.state).toBeNull();
    expect(customerDialogs(state, action).customerInDialog
    .contact.state).toBeNull();
}

const dummyFirstName = "first";
const dummyLastName = "last";
const dummyContact = "0425955568!!!";
const dummyCredit = 15.50;

const dummyCustomer = {
    id: 0,
    firstName: dummyFirstName,
    lastName: dummyLastName,
    contact: dummyContact,
    credit: dummyCredit
};

const assertOpenAddCustomerDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.ADD_CUSTOMER);
    expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
    expect(state.dialogState.editable).toBeTruthy();
}

const assertOpenEditCustomerDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.EDIT_CUSTOMER);
    expect(state.dialogState.mode).toEqual(dialogModes.EDIT_MODE);
    expect(state.dialogState.editable).toEqual(false);
}

describe('CustomerDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    it('should return user dialog opened when receiving OPEN_ADD_CUSTOMER_DIALOG action', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
        });
        assertOpenAddCustomerDialog(returnValue);
    });
    it('should return user dialog opened but not in edit mode when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer
        });
        assertOpenEditCustomerDialog(returnValue);
    });
    it('should return user dialog opened after closed when receiving OPEN_ADD_CUSTOMER_DIALOG action', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
        });
        assertOpenAddCustomerDialog(returnValue);
    });
    it('should return user dialog opened after closed when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {
        const returnValue = customerDialogs({
            dialogModes: {
                open: false,
                editable: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer
        });
        assertOpenEditCustomerDialog(returnValue);
    });
    it('should return selected user record when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {        
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer
        });
        assertOpenEditCustomerDialog(returnValue);
        expect(returnValue.customerInDialog
            .id).toEqual(dummyCustomer.id);
        expect(returnValue.customerInDialog
            .firstName.value).toEqual(dummyCustomer.firstName);
        expect(returnValue.customerInDialog
            .lastName.value).toEqual(dummyCustomer.lastName);
        expect(returnValue.customerInDialog
            .contact.value).toEqual(dummyCustomer.contact);
        expect(returnValue.customerInDialog
            .credit).toEqual(dummyCustomer.credit);
    });
    it('should return all fields state success when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {        
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer
        });
        expect(returnValue.customerInDialog.firstName.state).toBe("success");
        expect(returnValue.customerInDialog.lastName.state).toBe("success");
        expect(returnValue.customerInDialog.contact.state).toBe("success");
    });
    it('should return user dialog closed and initial state of all fields when receiving CLOSE_CUSTOMER_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_CUSTOMER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return user dialog closed and initial state of all fields after opened when receiving CLOSE_CUSTOMER_DIALOG action', () => {
        let state = {
            dialogState: {
                open: true
            }
        };
        let action = {
            type: actionTypes.CLOSE_CUSTOMER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit mode true when receiving ENABLE_EDIT_MODE', () => {
        expect(customerDialogs(undefined, {
            type: actionTypes.ENABLE_EDITABLE
        }).dialogState.editable).toBeTruthy();
    });
    it('should return the modified firstName field with success state when receiving UPDATE_FIRSTNAME_FIELD action', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.UPDATE_FIRSTNAME_FIELD,
            firstName: dummyFirstName
        });
        expect(returnValue.customerInDialog
            .firstName.value).toEqual(dummyFirstName);
        expect(returnValue.customerInDialog
            .firstName.state).toEqual("success");
    });
    it('should return the empty firstName field with null state when receiving UPDATE_FIRSTNAME_FIELD action with empty firstName', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.UPDATE_FIRSTNAME_FIELD,
            firstName: ""
        });
        expect(returnValue.customerInDialog
            .firstName.value).toEqual("");
        expect(returnValue.customerInDialog
            .firstName.state).toBeNull();
    });
    it('should return the modified lastName field with success state when receiving UPDATE_LASTNAME_FIELD action', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.UPDATE_LASTNAME_FIELD,
            lastName: dummyLastName
        });
        expect(returnValue.customerInDialog
            .lastName.value).toEqual(dummyLastName);
        expect(returnValue.customerInDialog
            .lastName.state).toEqual("success");
    });
    it('should return the empty lastName field with null state when receiving UPDATE_LASTNAME_FIELD action with empty lastName', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.UPDATE_LASTNAME_FIELD,
            lastName: ""
        });
        expect(returnValue.customerInDialog
            .lastName.value).toEqual("");
        expect(returnValue.customerInDialog
            .lastName.state).toBeNull();
    });
    it('should return the modified contact field with success state when receiving UPDATE_CONTACT_FIELD action', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.UPDATE_CONTACT_FIELD,
            contact: dummyContact
        });
        expect(returnValue.customerInDialog
            .contact.value).toEqual(dummyContact);
        expect(returnValue.customerInDialog
            .contact.state).toEqual("success");
    });
    it('should return the empty contact field with null state when receiving UPDATE_CONTACT_FIELD action with empty contact', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.UPDATE_CONTACT_FIELD,
            contact: ""
        });
        expect(returnValue.customerInDialog
            .contact.value).toEqual("");
        expect(returnValue.customerInDialog
            .contact.state).toBeNull();
    });
});