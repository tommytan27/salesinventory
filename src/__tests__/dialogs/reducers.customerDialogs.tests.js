import customerDialogs from './../../reducers/dialogs/customerDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogModes from './../../constants/dialogModes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialDialogState = (state, action) => {
    expect(customerDialogs(state, action).dialogState.open).toBeFalsy();
    expect(customerDialogs(state, action).dialogState.title).toEqual("");
    expect(customerDialogs(state, action).dialogState.mode).toBeNull();
    expect(customerDialogs(state, action).dialogState.error).toBeFalsy();
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

const dummyCustomer2 = {
    id: 0,
    firstName: dummyFirstName,
    lastName: dummyLastName,
    contact: "",
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

const assertAddAndSaveCustomer = (returnValue) => {
    expect(returnValue.customerInDialog.firstName.state).toBe("error");
    expect(returnValue.customerInDialog.lastName.state).toBe("error");
    expect(returnValue.dialogState.error).toBe(true);
}

describe('CustomerDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    it('should return customer dialog opened when receiving OPEN_ADD_CUSTOMER_DIALOG action', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
        });
        assertOpenAddCustomerDialog(returnValue);
    });
    it('should return customer dialog opened but not in edit mode when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {
        const returnValue = customerDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer
        });
        assertOpenEditCustomerDialog(returnValue);
    });
    it('should return customer dialog opened after closed when receiving OPEN_ADD_CUSTOMER_DIALOG action', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
        });
        assertOpenAddCustomerDialog(returnValue);
    });
    it('should return customer dialog opened after closed when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {
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
    it('should return selected customer record when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {        
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
            .credit).toEqual(dummyCustomer.credit.toFixed(2));
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
    it('should return all fields state success except contact if empty when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {        
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer2
        });
        expect(returnValue.customerInDialog.firstName.state).toBe("success");
        expect(returnValue.customerInDialog.lastName.state).toBe("success");
        expect(returnValue.customerInDialog.contact.state).toBeNull();
    });
    it('should return customer dialog closed and initial state of all fields when receiving CLOSE_CUSTOMER_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_CUSTOMER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return customer dialog closed and initial state of all fields after opened when receiving CLOSE_CUSTOMER_DIALOG action', () => {
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
    it('should return all null required fields with error state and dialogState of error when receiving FAIL_ADD_CUSTOMER action', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: null,
                    state: null
                },
                lastName: {
                    value: null,
                    state: null
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        }, {
            type: actionTypes.FAIL_ADD_CUSTOMER
        });
        assertAddAndSaveCustomer(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving FAIL_ADD_CUSTOMER action', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: "",
                    state: null
                },
                lastName: {
                    value: "",
                    state: null
                },
                contact: {
                    value: "",
                    state: null
                },
                credit: ""
            }
        }, {
            type: actionTypes.FAIL_ADD_CUSTOMER
        });
        assertAddAndSaveCustomer(returnValue);
    });
    it('should return all null required fields with error state and dialogState of error when receiving FAIL_SAVE_CUSTOMER action', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: 1,
                firstName: {
                    value: null,
                    state: null
                },
                lastName: {
                    value: null,
                    state: null
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        }, {
            type: actionTypes.FAIL_SAVE_CUSTOMER
        });
        expect(returnValue.customerInDialog.id).toEqual(1);
        assertAddAndSaveCustomer(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving FAIL_SAVE_CUSTOMER action', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: 1,
                firstName: {
                    value: "",
                    state: null
                },
                lastName: {
                    value: "",
                    state: null
                },
                contact: {
                    value: "",
                    state: null
                },
                credit: ""
            }
        }, {
            type: actionTypes.FAIL_SAVE_CUSTOMER
        });
        expect(returnValue.customerInDialog.id).toEqual(1);
        assertAddAndSaveCustomer(returnValue);
    });
    it('should return the state of all fields that are success and dialogState of error when receiving FAIL_ADD_CUSTOMER action with an empty firstName', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.ADD_CUSTOMER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: "",
                    state: null
                },
                lastName: {
                    value: "Last",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        }, {
            type: actionTypes.FAIL_ADD_CUSTOMER
        });
        expect(returnValue.customerInDialog.firstName.state).toBe("error");
        expect(returnValue.customerInDialog.lastName.state).toBe("success");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the state of all fields that are success and dialogState of error when receiving FAIL_SAVE_CUSTOMER action with an empty firstName', () => {
        const returnValue = customerDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_CUSTOMER,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: 1,
                firstName: {
                    value: "",
                    state: null
                },
                lastName: {
                    value: "Last",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        }, {
            type: actionTypes.FAIL_SAVE_CUSTOMER
        });
        expect(returnValue.customerInDialog.id).toEqual(1);
        expect(returnValue.customerInDialog.firstName.state).toBe("error");
        expect(returnValue.customerInDialog.lastName.state).toBe("success");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the initial state when receiving SAVE_CUSTOMER action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_CUSTOMER,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: "First",
                    state: "success"
                },
                lastName: {
                    value: "Last",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        };
        const action = {
            type: actionTypes.SAVE_CUSTOMER,
            customer: {}
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving ADD_CUSTOMER action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_CUSTOMER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: "First",
                    state: "success"
                },
                lastName: {
                    value: "Last",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        };
        const action = {
            type: actionTypes.ADD_CUSTOMER,
            customer: {}
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving CHANGE_PAGE_ADMIN_MAIN_MENU', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_CUSTOMER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: "First",
                    state: "success"
                },
                lastName: {
                    value: "Last",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        };
        const action = {
            type: actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving CHANGE_MODE_USER', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_CUSTOMER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: "First",
                    state: "success"
                },
                lastName: {
                    value: "Last",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        };
        const action = {
            type: actionTypes.CHANGE_MODE_USER
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving CHANGE_MODE_USER_DUE_TIMEOUT', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_CUSTOMER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            customerInDialog: {
                id: null,
                firstName: {
                    value: "First",
                    state: "success"
                },
                lastName: {
                    value: "Last",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                },
                credit: null
            }
        };
        const action = {
            type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
});