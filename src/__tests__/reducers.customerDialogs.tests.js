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
});