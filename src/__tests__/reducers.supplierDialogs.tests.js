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

const dummyName = "name";
const dummyContact = "0425955568!!!";

const dummySupplier = {
    id: 0,
    name: dummyName,
    contact: dummyContact
};

const dummySupplier2 = {
    id: 0,
    name: dummyName,
    contact: "",
};

const assertOpenAddSupplierDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.ADD_SUPPLIER);
    expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
    expect(state.dialogState.editable).toBeTruthy();
}

const assertOpenEditSupplierDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.EDIT_SUPPLIER);
    expect(state.dialogState.mode).toEqual(dialogModes.EDIT_MODE);
    expect(state.dialogState.editable).toEqual(false);
}

const assertAddAndSaveSupplier = (returnValue) => {
    expect(returnValue.supplierInDialog.name.state).toBe("error");
    expect(returnValue.dialogState.error).toBe(true);
}

describe('supplierDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    it('should return user dialog opened when receiving OPEN_ADD_SUPPLIER_DIALOG action', () => {
        const returnValue = supplierDialogs(undefined, {
            type: actionTypes.OPEN_ADD_SUPPLIER_DIALOG
        });
        assertOpenAddSupplierDialog(returnValue);
    });
    it('should return user dialog opened but not in edit mode when receiving OPEN_EDIT_SUPPLIER_DIALOG action', () => {
        const returnValue = supplierDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_SUPPLIER_DIALOG,
            supplier: dummySupplier
        });
        assertOpenEditSupplierDialog(returnValue);
    });
    it('should return user dialog opened after closed when receiving OPEN_ADD_SUPPLIER_DIALOG action', () => {
        const returnValue = supplierDialogs({
            dialogState: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_SUPPLIER_DIALOG
        });
        assertOpenAddSupplierDialog(returnValue);
    });
    it('should return user dialog opened after closed when receiving OPEN_EDIT_SUPPLIER_DIALOG action', () => {
        const returnValue = supplierDialogs({
            dialogModes: {
                open: false,
                editable: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_SUPPLIER_DIALOG,
            supplier: dummySupplier
        });
        assertOpenEditSupplierDialog(returnValue);
    });
    it('should return selected supplier record when receiving OPEN_EDIT_SUPPLIER_DIALOG action', () => {        
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_SUPPLIER_DIALOG,
            supplier: dummySupplier
        });
        assertOpenEditSupplierDialog(returnValue);
        expect(returnValue.supplierInDialog
            .id).toEqual(dummySupplier.id);
        expect(returnValue.supplierInDialog
            .name.value).toEqual(dummySupplier.name);
        expect(returnValue.supplierInDialog
            .contact.value).toEqual(dummySupplier.contact);
    });
    it('should return all fields state success when receiving OPEN_EDIT_SUPPLIER_DIALOG action', () => {        
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_SUPPLIER_DIALOG,
            supplier: dummySupplier
        });
        expect(returnValue.supplierInDialog.name.state).toBe("success");
        expect(returnValue.supplierInDialog.contact.state).toBe("success");
    });
    it('should return all fields state success except contact if empty when receiving OPEN_EDIT_SUPPLIER_DIALOG action', () => {        
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_SUPPLIER_DIALOG,
            supplier: dummySupplier2
        });
        expect(returnValue.supplierInDialog.name.state).toBe("success");
        expect(returnValue.supplierInDialog.contact.state).toBeNull();
    });
    it('should return user dialog closed and initial state of all fields when receiving CLOSE_SUPPLIER_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_SUPPLIER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return user dialog closed and initial state of all fields after opened when receiving CLOSE_SUPPLIER_DIALOG action', () => {
        let state = {
            dialogState: {
                open: true
            }
        };
        let action = {
            type: actionTypes.CLOSE_SUPPLIER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit mode true when receiving ENABLE_EDIT_MODE', () => {
        expect(supplierDialogs(undefined, {
            type: actionTypes.ENABLE_EDITABLE
        }).dialogState.editable).toBeTruthy();
    });
    it('should return the modified firstName field with success state when receiving UPDATE_SUPPLIER_NAME_FIELD action', () => {
        const returnValue = supplierDialogs(undefined, {
            type: actionTypes.UPDATE_SUPPLIER_NAME_FIELD,
            name: dummyName
        });
        expect(returnValue.supplierInDialog
            .name.value).toEqual(dummyName);
        expect(returnValue.supplierInDialog
            .name.state).toEqual("success");
    });
    it('should return the empty firstName field with null state when receiving UPDATE_SUPPLIER_NAME_FIELD action with empty firstName', () => {
        const returnValue = supplierDialogs(undefined, {
            type: actionTypes.UPDATE_SUPPLIER_NAME_FIELD,
            name: ""
        });
        expect(returnValue.supplierInDialog
            .name.value).toEqual("");
        expect(returnValue.supplierInDialog
            .name.state).toBeNull();
    });
    it('should return the modified contact field with success state when receiving UPDATE_CONTACT_FIELD action', () => {
        const returnValue = supplierDialogs(undefined, {
            type: actionTypes.UPDATE_CONTACT_FIELD,
            contact: dummyContact
        });
        expect(returnValue.supplierInDialog
            .contact.value).toEqual(dummyContact);
        expect(returnValue.supplierInDialog
            .contact.state).toEqual("success");
    });
    it('should return the empty contact field with null state when receiving UPDATE_CONTACT_FIELD action with empty contact', () => {
        const returnValue = supplierDialogs(undefined, {
            type: actionTypes.UPDATE_CONTACT_FIELD,
            contact: ""
        });
        expect(returnValue.supplierInDialog
            .contact.value).toEqual("");
        expect(returnValue.supplierInDialog
            .contact.state).toBeNull();
    });
    it('should return all null required fields with error state and dialogState of error when receiving ADD_SUPPLIER action', () => {
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            supplierInDialog: {
                id: null,
                name: {
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
            type: actionTypes.ADD_SUPPLIER
        });
        assertAddAndSaveSupplier(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving ADD_SUPPLIER action', () => {
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            supplierInDialog: {
                id: null,
                name: {
                    value: null,
                    state: null
                },
                contact: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_SUPPLIER
        });
        assertAddAndSaveSupplier(returnValue);
    });
    it('should return all null required fields with error state and dialogState of error when receiving SAVE_SUPPLIER action', () => {
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            supplierInDialog: {
                id: null,
                name: {
                    value: null,
                    state: null
                },
                contact: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_SUPPLIER
        });
        assertAddAndSaveSupplier(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving SAVE_SUPPLIER action', () => {
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            supplierInDialog: {
                id: null,
                name: {
                    value: null,
                    state: null
                },
                contact: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_SUPPLIER
        });
        assertAddAndSaveSupplier(returnValue);
    });
    it('should return the state of all fields that are success and dialogState of error when receiving SAVE_SUPPLIER action with an empty firstName', () => {
        const returnValue = supplierDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_SUPPLIER,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            supplierInDialog: {
                id: null,
                name: {
                    value: "",
                    state: null
                },
                contact: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_SUPPLIER
        });
        expect(returnValue.supplierInDialog.name.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the initial state when receiving SAVE_SUPPLIER action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_SUPPLIER,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            supplierInDialog: {
                id: null,
                name: {
                    value: "First",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                }
            }
        };
        const action = {
            type: actionTypes.SAVE_SUPPLIER
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving ADD_SUPPLIER action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_SUPPLIER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            supplierInDialog: {
                id: null,
                name: {
                    value: "First",
                    state: "success"
                },
                contact: {
                    value: null,
                    state: null
                }
            }
        };
        const action = {
            type: actionTypes.ADD_SUPPLIER
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
});