import supplierDialogs from './../reducers/supplierDialogs';
import actionTypes from './../constants/actionTypes';
import dialogModes from './../constants/dialogModes';
import dialogTitles from './../constants/dialogTitles';

const assertInitialDialogState = (state, action) => {
    expect(supplierDialogs(state, action).dialogState.open).toBeFalsy();
    expect(supplierDialogs(state, action).dialogState.title).toEqual("");
    expect(supplierDialogs(state, action).dialogState.mode).toBeNull();
    expect(supplierDialogs(state, action).dialogState.error).toBeFalsy();
    expect(supplierDialogs(state, action).dialogState.editable).toEqual(false);
}

const assertInitialState = (state, action) => {    
    expect(supplierDialogs(state, action).supplierInDialog
    .id).toBeNull();
    expect(supplierDialogs(state, action).supplierInDialog
    .name.value).toBeNull();
    expect(supplierDialogs(state, action).supplierInDialog
    .contact.value).toBeNull();

    expect(supplierDialogs(state, action).supplierInDialog
    .name.state).toBeNull();
    expect(supplierDialogs(state, action).supplierInDialog
    .contact.state).toBeNull();
}

// const dummyName = "name";
// const dummyContact = "0425955568!!!";
// const dummyCredit = 15.50;

// const dummyCustomer = {
//     id: 0,
//     firstName: dummyName,
//     lastName: dummyLastName,
//     contact: dummyContact,
//     credit: dummyCredit
// };

// const dummyCustomer2 = {
//     id: 0,
//     firstName: dummyName,
//     lastName: dummyLastName,
//     contact: "",
//     credit: dummyCredit
// };

// const assertOpenAddCustomerDialog = (state) => {
//     expect(state.dialogState.open).toBeTruthy();
//     expect(state.dialogState.title).toEqual(dialogTitles.ADD_CUSTOMER);
//     expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
//     expect(state.dialogState.editable).toBeTruthy();
// }

// const assertOpenEditCustomerDialog = (state) => {
//     expect(state.dialogState.open).toBeTruthy();
//     expect(state.dialogState.title).toEqual(dialogTitles.EDIT_CUSTOMER);
//     expect(state.dialogState.mode).toEqual(dialogModes.EDIT_MODE);
//     expect(state.dialogState.editable).toEqual(false);
// }

// const assertAddAndSaveCustomer = (returnValue) => {
//     expect(returnValue.supplierInDialog.firstName.state).toBe("error");
//     expect(returnValue.supplierInDialog.lastName.state).toBe("error");
//     expect(returnValue.dialogState.error).toBe(true);
// }

describe('supplierDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    // it('should return user dialog opened when receiving OPEN_ADD_CUSTOMER_DIALOG action', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
    //     });
    //     assertOpenAddCustomerDialog(returnValue);
    // });
    // it('should return user dialog opened but not in edit mode when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
    //         customer: dummyCustomer
    //     });
    //     assertOpenEditCustomerDialog(returnValue);
    // });
    // it('should return user dialog opened after closed when receiving OPEN_ADD_CUSTOMER_DIALOG action', () => {
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false
    //         }
    //     }, {
    //         type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
    //     });
    //     assertOpenAddCustomerDialog(returnValue);
    // });
    // it('should return user dialog opened after closed when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {
    //     const returnValue = supplierDialogs({
    //         dialogModes: {
    //             open: false,
    //             editable: false
    //         }
    //     }, {
    //         type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
    //         customer: dummyCustomer
    //     });
    //     assertOpenEditCustomerDialog(returnValue);
    // });
    // it('should return selected user record when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {        
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             editable: false
    //         },
    //     }, {
    //         type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
    //         customer: dummyCustomer
    //     });
    //     assertOpenEditCustomerDialog(returnValue);
    //     expect(returnValue.supplierInDialog
    //         .id).toEqual(dummyCustomer.id);
    //     expect(returnValue.supplierInDialog
    //         .firstName.value).toEqual(dummyCustomer.firstName);
    //     expect(returnValue.supplierInDialog
    //         .lastName.value).toEqual(dummyCustomer.lastName);
    //     expect(returnValue.supplierInDialog
    //         .contact.value).toEqual(dummyCustomer.contact);
    //     expect(returnValue.supplierInDialog
    //         .credit).toEqual(dummyCustomer.credit);
    // });
    // it('should return all fields state success when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {        
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             editable: false
    //         },
    //     }, {
    //         type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
    //         customer: dummyCustomer
    //     });
    //     expect(returnValue.supplierInDialog.firstName.state).toBe("success");
    //     expect(returnValue.supplierInDialog.lastName.state).toBe("success");
    //     expect(returnValue.supplierInDialog.contact.state).toBe("success");
    // });
    // it('should return all fields state success except contact if empty when receiving OPEN_EDIT_CUSTOMER_DIALOG action', () => {        
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             editable: false
    //         },
    //     }, {
    //         type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
    //         customer: dummyCustomer2
    //     });
    //     expect(returnValue.supplierInDialog.firstName.state).toBe("success");
    //     expect(returnValue.supplierInDialog.lastName.state).toBe("success");
    //     expect(returnValue.supplierInDialog.contact.state).toBeNull();
    // });
    // it('should return user dialog closed and initial state of all fields when receiving CLOSE_CUSTOMER_DIALOG action', () => {
    //     let state = undefined;
    //     let action = {
    //         type: actionTypes.CLOSE_CUSTOMER_DIALOG
    //     }
    //     assertInitialDialogState(state, action);
    //     assertInitialState(state, action);
    // });
    // it('should return user dialog closed and initial state of all fields after opened when receiving CLOSE_CUSTOMER_DIALOG action', () => {
    //     let state = {
    //         dialogState: {
    //             open: true
    //         }
    //     };
    //     let action = {
    //         type: actionTypes.CLOSE_CUSTOMER_DIALOG
    //     }
    //     assertInitialDialogState(state, action);
    //     assertInitialState(state, action);
    // });
    // it('should return edit mode true when receiving ENABLE_EDIT_MODE', () => {
    //     expect(supplierDialogs(undefined, {
    //         type: actionTypes.ENABLE_EDITABLE
    //     }).dialogState.editable).toBeTruthy();
    // });
    // it('should return the modified firstName field with success state when receiving UPDATE_FIRSTNAME_FIELD action', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.UPDATE_FIRSTNAME_FIELD,
    //         firstName: dummyName

    //     });
    //     expect(returnValue.supplierInDialog
    //         .firstName.value).toEqual(dummyName);
    //     expect(returnValue.supplierInDialog
    //         .firstName.state).toEqual("success");
    // });
    // it('should return the empty firstName field with null state when receiving UPDATE_FIRSTNAME_FIELD action with empty firstName', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.UPDATE_FIRSTNAME_FIELD,
    //         firstName: ""
    //     });
    //     expect(returnValue.supplierInDialog
    //         .firstName.value).toEqual("");
    //     expect(returnValue.supplierInDialog
    //         .firstName.state).toBeNull();
    // });
    // it('should return the modified lastName field with success state when receiving UPDATE_LASTNAME_FIELD action', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.UPDATE_LASTNAME_FIELD,
    //         lastName: dummyLastName
    //     });
    //     expect(returnValue.supplierInDialog
    //         .lastName.value).toEqual(dummyLastName);
    //     expect(returnValue.supplierInDialog
    //         .lastName.state).toEqual("success");
    // });
    // it('should return the empty lastName field with null state when receiving UPDATE_LASTNAME_FIELD action with empty lastName', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.UPDATE_LASTNAME_FIELD,
    //         lastName: ""
    //     });
    //     expect(returnValue.supplierInDialog
    //         .lastName.value).toEqual("");
    //     expect(returnValue.supplierInDialog
    //         .lastName.state).toBeNull();
    // });
    // it('should return the modified contact field with success state when receiving UPDATE_CONTACT_FIELD action', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.UPDATE_CONTACT_FIELD,
    //         contact: dummyContact
    //     });
    //     expect(returnValue.supplierInDialog
    //         .contact.value).toEqual(dummyContact);
    //     expect(returnValue.supplierInDialog
    //         .contact.state).toEqual("success");
    // });
    // it('should return the empty contact field with null state when receiving UPDATE_CONTACT_FIELD action with empty contact', () => {
    //     const returnValue = supplierDialogs(undefined, {
    //         type: actionTypes.UPDATE_CONTACT_FIELD,
    //         contact: ""
    //     });
    //     expect(returnValue.supplierInDialog
    //         .contact.value).toEqual("");
    //     expect(returnValue.supplierInDialog
    //         .contact.state).toBeNull();
    // });
    // it('should return all null required fields with error state and dialogState of error when receiving ADD_CUSTOMER action', () => {
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.ADD_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         supplierInDialog: {
    //             id: null,
    //             firstName: {
    //                 value: null,
    //                 state: null
    //             },
    //             lastName: {
    //                 value: null,
    //                 state: null
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             },
    //             credit: null
    //         }
    //     }, {
    //         type: actionTypes.ADD_CUSTOMER
    //     });
    //     assertAddAndSaveCustomer(returnValue);
    // });
    // it('should return all empty required fields with error state and dialogState of error when receiving ADD_CUSTOMER action', () => {
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.ADD_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         supplierInDialog: {
    //             id: null,
    //             firstName: {
    //                 value: null,
    //                 state: null
    //             },
    //             lastName: {
    //                 value: null,
    //                 state: null
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             },
    //             credit: null
    //         }
    //     }, {
    //         type: actionTypes.ADD_CUSTOMER
    //     });
    //     assertAddAndSaveCustomer(returnValue);
    // });
    // it('should return all null required fields with error state and dialogState of error when receiving SAVE_CUSTOMER action', () => {
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.EDIT_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         supplierInDialog: {
    //             id: null,
    //             firstName: {
    //                 value: null,
    //                 state: null
    //             },
    //             lastName: {
    //                 value: null,
    //                 state: null
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             },
    //             credit: null
    //         }
    //     }, {
    //         type: actionTypes.SAVE_CUSTOMER
    //     });
    //     assertAddAndSaveCustomer(returnValue);
    // });
    // it('should return all empty required fields with error state and dialogState of error when receiving SAVE_CUSTOMER action', () => {
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.EDIT_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         supplierInDialog: {
    //             id: null,
    //             firstName: {
    //                 value: null,
    //                 state: null
    //             },
    //             lastName: {
    //                 value: null,
    //                 state: null
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             },
    //             credit: null
    //         }
    //     }, {
    //         type: actionTypes.SAVE_CUSTOMER
    //     });
    //     assertAddAndSaveCustomer(returnValue);
    // });
    // it('should return the state of all fields that are success and dialogState of error when receiving SAVE_CUSTOMER action with an empty firstName', () => {
    //     const returnValue = supplierDialogs({
    //         dialogState: {
    //             open: false,
    //             title: dialogTitles.ADD_CUSTOMER,
    //             mode: dialogModes.ADD_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         supplierInDialog: {
    //             id: null,
    //             firstName: {
    //                 value: "",
    //                 state: null
    //             },
    //             lastName: {
    //                 value: "Last",
    //                 state: "success"
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             },
    //             credit: null
    //         }
    //     }, {
    //         type: actionTypes.SAVE_CUSTOMER
    //     });
    //     expect(returnValue.supplierInDialog.firstName.state).toBe("error");
    //     expect(returnValue.supplierInDialog.lastName.state).toBe("success");
    //     expect(returnValue.dialogState.error).toBe(true);
    // });
    // it('should return the initial state when receiving SAVE_CUSTOMER action with an valid input', () => {
    //     const state = {
    //         dialogState: {
    //             open: false,
    //             title: dialogTitles.EDIT_CUSTOMER,
    //             mode: dialogModes.EDIT_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         supplierInDialog: {
    //             id: null,
    //             firstName: {
    //                 value: "First",
    //                 state: "success"
    //             },
    //             lastName: {
    //                 value: "Last",
    //                 state: "success"
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             },
    //             credit: null
    //         }
    //     };
    //     const action = {
    //         type: actionTypes.SAVE_CUSTOMER
    //     }
    //     assertInitialDialogState(state, action);
    //     assertInitialState(state, action);
    // });
    // it('should return the initial state when receiving ADD_CUSTOMER action with an valid input', () => {
    //     const state = {
    //         dialogState: {
    //             open: false,
    //             title: dialogTitles.ADD_CUSTOMER,
    //             mode: dialogModes.ADD_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         supplierInDialog: {
    //             id: null,
    //             firstName: {
    //                 value: "First",
    //                 state: "success"
    //             },
    //             lastName: {
    //                 value: "Last",
    //                 state: "success"
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             },
    //             credit: null
    //         }
    //     };
    //     const action = {
    //         type: actionTypes.ADD_CUSTOMER
    //     }
    //     assertInitialDialogState(state, action);
    //     assertInitialState(state, action);
    // });
});