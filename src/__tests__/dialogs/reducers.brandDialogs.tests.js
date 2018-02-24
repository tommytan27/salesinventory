import brandDialogs from './../../reducers/dialogs/brandDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogModes from './../../constants/dialogModes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialDialogState = (state, action) => {
    expect(brandDialogs(state, action).dialogState.open).toBeFalsy();
    expect(brandDialogs(state, action).dialogState.title).toEqual("");
    expect(brandDialogs(state, action).dialogState.mode).toBeNull();
    expect(brandDialogs(state, action).dialogState.error).toBeFalsy();
    expect(brandDialogs(state, action).dialogState.editable).toEqual(false);
}

const assertInitialState = (state, action) => {    
    expect(brandDialogs(state, action).brandInDialog
    .id).toBeNull();
    expect(brandDialogs(state, action).brandInDialog
    .name.value).toBeNull();

    expect(brandDialogs(state, action).brandInDialog
    .name.state).toBeNull();
}

const dummyName = "name";

const dummyBrand = {
    id: 0,
    name: dummyName,
};

const assertOpenAddBrandDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.ADD_BRAND);
    expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
    expect(state.dialogState.editable).toBeTruthy();
}

const assertOpenEditBrandDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.EDIT_BRAND);
    expect(state.dialogState.mode).toEqual(dialogModes.EDIT_MODE);
    expect(state.dialogState.editable).toEqual(false);
}

const assertAddAndSaveBrand = (returnValue) => {
    expect(returnValue.brandInDialog.name.state).toBe("error");
}

describe('brandDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    it('should return brand dialog opened when receiving OPEN_ADD_BRAND_DIALOG action', () => {
        const returnValue = brandDialogs(undefined, {
            type: actionTypes.OPEN_ADD_BRAND_DIALOG
        });
        assertOpenAddBrandDialog(returnValue);
    });
    it('should return brand dialog opened but not in edit mode when receiving OPEN_EDIT_BRAND_DIALOG action', () => {
        const returnValue = brandDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_BRAND_DIALOG,
            brand: dummyBrand
        });
        assertOpenEditBrandDialog(returnValue);
    });
    it('should return brand dialog opened after closed when receiving OPEN_ADD_BRAND_DIALOG action', () => {
        const returnValue = brandDialogs({
            dialogState: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_BRAND_DIALOG
        });
        assertOpenAddBrandDialog(returnValue);
    });
    it('should return brand dialog opened after closed when receiving OPEN_EDIT_BRAND_DIALOG action', () => {
        const returnValue = brandDialogs({
            dialogModes: {
                open: false,
                editable: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_BRAND_DIALOG,
            brand: dummyBrand
        });
        assertOpenEditBrandDialog(returnValue);
    });
    it('should return selected brand record when receiving OPEN_EDIT_BRAND_DIALOG action', () => {        
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_BRAND_DIALOG,
            brand: dummyBrand
        });
        assertOpenEditBrandDialog(returnValue);
        expect(returnValue.brandInDialog
            .id).toEqual(dummyBrand.id);
        expect(returnValue.brandInDialog
            .name.value).toEqual(dummyBrand.name);
    });
    it('should return all fields state success when receiving OPEN_EDIT_BRAND_DIALOG action', () => {        
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_BRAND_DIALOG,
            brand: dummyBrand
        });
        expect(returnValue.brandInDialog.name.state).toBe("success");
    });
    it('should return user dialog closed and initial state of all fields when receiving CLOSE_BRAND_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_BRAND_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return user dialog closed and initial state of all fields after opened when receiving CLOSE_BRAND_DIALOG action', () => {
        let state = {
            dialogState: {
                open: true
            }
        };
        let action = {
            type: actionTypes.CLOSE_BRAND_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit mode true when receiving ENABLE_EDIT_MODE', () => {
        expect(brandDialogs(undefined, {
            type: actionTypes.ENABLE_EDITABLE
        }).dialogState.editable).toBeTruthy();
    });
    it('should return the modified name field with success state when receiving UPDATE_BRAND_NAME_FIELD action', () => {
        const returnValue = brandDialogs(undefined, {
            type: actionTypes.UPDATE_BRAND_NAME_FIELD,
            name: dummyName
        });
        expect(returnValue.brandInDialog
            .name.value).toEqual(dummyName);
        expect(returnValue.brandInDialog
            .name.state).toEqual("success");
    });
    it('should return the empty name field with null state when receiving UPDATE_BRAND_NAME_FIELD action with empty firstName', () => {
        const returnValue = brandDialogs(undefined, {
            type: actionTypes.UPDATE_BRAND_NAME_FIELD,
            name: ""
        });
        expect(returnValue.brandInDialog
            .name.value).toEqual("");
        expect(returnValue.brandInDialog
            .name.state).toBeNull();
    });
    it('should return all null required fields with error state and dialogState of error when receiving ADD_BRAND action', () => {
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
                id: null,
                name: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_BRAND
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving ADD_BRAND action', () => {
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
                id: null,
                name: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_BRAND
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return all null required fields with error state and dialogState of error when receiving SAVE_BRAND action', () => {
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
                id: null,
                name: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_BRAND
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving SAVE_BRAND action', () => {
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
                id: null,
                name: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_BRAND
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return the state of all fields that are success and dialogState of error when receiving ADD_BRAND action with an empty firstName', () => {
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.ADD_BRAND,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
                id: null,
                name: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_BRAND
        });
        expect(returnValue.brandInDialog.name.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the state of all fields that are success and dialogState of error when receiving SAVE_BRAND action with an empty firstName', () => {
        const returnValue = brandDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_BRAND,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
                id: null,
                name: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_BRAND
        });
        expect(returnValue.brandInDialog.name.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the initial state when receiving SAVE_BRAND action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_BRAND,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
                id: null,
                name: {
                    value: "First",
                    state: "success"
                }
            }
        };
        const action = {
            type: actionTypes.SAVE_BRAND
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving ADD_BRAND action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_BRAND,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            brandInDialog: {
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
            type: actionTypes.ADD_BRAND
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
});