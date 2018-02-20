import itemDialogs from './../reducers/dialogs/itemDialogs';
import actionTypes from './../constants/actionTypes';
import dialogModes from './../constants/dialogModes';
import dialogTitles from './../constants/dialogTitles';

const assertInitialDialogState = (state, action) => {
    expect(itemDialogs(state, action).dialogState.open).toBeFalsy();
    expect(itemDialogs(state, action).dialogState.title).toEqual("");
    expect(itemDialogs(state, action).dialogState.mode).toBeNull();
    expect(itemDialogs(state, action).dialogState.error).toBeFalsy();
    expect(itemDialogs(state, action).dialogState.editable).toEqual(false);
}

const assertInitialState = (state, action) => {    
    expect(itemDialogs(state, action).itemInDialog
    .barcode.value).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .barcode.state).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .name.value).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .name.state).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .supplierId).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .brandId).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .price.value).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .price.state).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .vegan).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .qty.value).toBeNull();
    expect(itemDialogs(state, action).itemInDialog
    .qty.state).toBeNull();
}

const dummyBarcode = "124315";
const dummyItemName = "item";
const dummySupplierId = 2;
const dummyBrandId = 3;
const dummyPrice = 5.00;
const dummyVegan = true;
const dummyQty = 3;

const dummyItem = {
    barcode: dummyBarcode,
    name: dummyItemName,
    supplierId: dummySupplierId,
    brandId: dummyBrandId,
    price: dummyPrice,
    vegan: dummyVegan,
    qty: dummyQty
};

// const assertOpenAddBrandDialog = (state) => {
//     expect(state.dialogState.open).toBeTruthy();
//     expect(state.dialogState.title).toEqual(dialogTitles.ADD_BRAND);
//     expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
//     expect(state.dialogState.editable).toBeTruthy();
// }

const assertOpenEditItemDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.EDIT_ITEM);
    expect(state.dialogState.mode).toEqual(dialogModes.EDIT_MODE);
    expect(state.dialogState.editable).toEqual(false);
}

// const assertAddAndSaveBrand = (returnValue) => {
//     expect(returnValue.itemInDialog.name.state).toBe("error");
// }

describe('itemDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    // it('should return brand dialog opened when receiving OPEN_ADD_BRAND_DIALOG action', () => {
    //     const returnValue = itemDialogs(undefined, {
    //         type: actionTypes.OPEN_ADD_BRAND_DIALOG
    //     });
    //     assertOpenAddBrandDialog(returnValue);
    // });
    it('should return item dialog opened but not in edit mode when receiving OPEN_EDIT_ITEM_DIALOG action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_ITEM_DIALOG,
            item: dummyItem
        });
        assertOpenEditItemDialog(returnValue);
    });
    // it('should return brand dialog opened after closed when receiving OPEN_ADD_BRAND_DIALOG action', () => {
    //     const returnValue = itemDialogs({
    //         dialogState: {
    //             open: false
    //         }
    //     }, {
    //         type: actionTypes.OPEN_ADD_BRAND_DIALOG
    //     });
    //     assertOpenAddBrandDialog(returnValue);
    // });
    it('should return brand dialog opened after closed when receiving OPEN_EDIT_ITEM_DIALOG action', () => {
        const returnValue = itemDialogs({
            dialogModes: {
                open: false,
                editable: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_ITEM_DIALOG,
            item: dummyItem
        });
        assertOpenEditItemDialog(returnValue);
    });
    it('should return selected brand record when receiving OPEN_EDIT_ITEM_DIALOG action', () => {        
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_ITEM_DIALOG,
            item: dummyItem
        });
        assertOpenEditItemDialog(returnValue);
        expect(returnValue.itemInDialog
            .barcode.value).toEqual(dummyItem.barcode);
        expect(returnValue.itemInDialog
            .name.value).toEqual(dummyItem.name);
        expect(returnValue.itemInDialog
            .price.value).toEqual(dummyItem.price);
        expect(returnValue.itemInDialog
            .qty.value).toEqual(dummyItem.qty);
        expect(returnValue.itemInDialog
            .supplierId).toEqual(dummyItem.supplierId);
        expect(returnValue.itemInDialog
            .brandId).toEqual(dummyItem.brandId);
        expect(returnValue.itemInDialog
            .vegan).toEqual(dummyItem.vegan);
    });
    it('should return all fields state success when receiving OPEN_EDIT_ITEM_DIALOG action', () => {        
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_ITEM_DIALOG,
            item: dummyItem
        });
        expect(returnValue.itemInDialog.barcode.state).toEqual("success");
        expect(returnValue.itemInDialog.name.state).toEqual("success");
        expect(returnValue.itemInDialog.price.state).toEqual("success");
        expect(returnValue.itemInDialog.qty.state).toEqual("success");
    });
    it('should return user dialog closed and initial state of all fields when receiving CLOSE_ITEM_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_ITEM_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return user dialog closed and initial state of all fields after opened when receiving CLOSE_ITEM_DIALOG action', () => {
        let state = {
            dialogState: {
                open: true
            }
        };
        let action = {
            type: actionTypes.CLOSE_ITEM_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit mode true when receiving ENABLE_EDIT_MODE', () => {
        expect(itemDialogs(undefined, {
            type: actionTypes.ENABLE_EDITABLE
        }).dialogState.editable).toBeTruthy();
    });
    // it('should return the modified name field with success state when receiving UPDATE_BRAND_NAME_FIELD action', () => {
    //     const returnValue = itemDialogs(undefined, {
    //         type: actionTypes.UPDATE_BRAND_NAME_FIELD,
    //         name: dummyName
    //     });
    //     expect(returnValue.itemInDialog
    //         .name.value).toEqual(dummyName);
    //     expect(returnValue.itemInDialog
    //         .name.state).toEqual("success");
    // });
    // it('should return the empty name field with null state when receiving UPDATE_BRAND_NAME_FIELD action with empty firstName', () => {
    //     const returnValue = itemDialogs(undefined, {
    //         type: actionTypes.UPDATE_BRAND_NAME_FIELD,
    //         name: ""
    //     });
    //     expect(returnValue.itemInDialog
    //         .name.value).toEqual("");
    //     expect(returnValue.itemInDialog
    //         .name.state).toBeNull();
    // });
    // it('should return all null required fields with error state and dialogState of error when receiving ADD_BRAND action', () => {
    //     const returnValue = itemDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.ADD_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         itemInDialog: {
    //             id: null,
    //             name: {
    //                 value: null,
    //                 state: null
    //             }
    //         }
    //     }, {
    //         type: actionTypes.ADD_BRAND
    //     });
    //     assertAddAndSaveBrand(returnValue);
    // });
    // it('should return all empty required fields with error state and dialogState of error when receiving ADD_BRAND action', () => {
    //     const returnValue = itemDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.ADD_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         itemInDialog: {
    //             id: null,
    //             name: {
    //                 value: null,
    //                 state: null
    //             }
    //         }
    //     }, {
    //         type: actionTypes.ADD_BRAND
    //     });
    //     assertAddAndSaveBrand(returnValue);
    // });
    // it('should return all null required fields with error state and dialogState of error when receiving SAVE_BRAND action', () => {
    //     const returnValue = itemDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.EDIT_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         itemInDialog: {
    //             id: null,
    //             name: {
    //                 value: null,
    //                 state: null
    //             }
    //         }
    //     }, {
    //         type: actionTypes.SAVE_BRAND
    //     });
    //     assertAddAndSaveBrand(returnValue);
    // });
    // it('should return all empty required fields with error state and dialogState of error when receiving SAVE_BRAND action', () => {
    //     const returnValue = itemDialogs({
    //         dialogState: {
    //             open: false,
    //             title: "",
    //             mode: dialogModes.EDIT_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         itemInDialog: {
    //             id: null,
    //             name: {
    //                 value: null,
    //                 state: null
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             }
    //         }
    //     }, {
    //         type: actionTypes.SAVE_BRAND
    //     });
    //     assertAddAndSaveBrand(returnValue);
    // });
    // it('should return the state of all fields that are success and dialogState of error when receiving SAVE_BRAND action with an empty firstName', () => {
    //     const returnValue = itemDialogs({
    //         dialogState: {
    //             open: false,
    //             title: dialogTitles.EDIT_SUPPLIER,
    //             mode: dialogModes.EDIT_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         itemInDialog: {
    //             id: null,
    //             name: {
    //                 value: "",
    //                 state: null
    //             }
    //         }
    //     }, {
    //         type: actionTypes.SAVE_BRAND
    //     });
    //     expect(returnValue.itemInDialog.name.state).toBe("error");
    //     expect(returnValue.dialogState.error).toBe(true);
    // });
    // it('should return the initial state when receiving SAVE_BRAND action with an valid input', () => {
    //     const state = {
    //         dialogState: {
    //             open: false,
    //             title: dialogTitles.EDIT_SUPPLIER,
    //             mode: dialogModes.EDIT_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         itemInDialog: {
    //             id: null,
    //             name: {
    //                 value: "First",
    //                 state: "success"
    //             }
    //         }
    //     };
    //     const action = {
    //         type: actionTypes.SAVE_BRAND
    //     }
    //     assertInitialDialogState(state, action);
    //     assertInitialState(state, action);
    // });
    // it('should return the initial state when receiving ADD_BRAND action with an valid input', () => {
    //     const state = {
    //         dialogState: {
    //             open: false,
    //             title: dialogTitles.ADD_BRAND,
    //             mode: dialogModes.ADD_MODE,
    //             error: false,
    //             editable: false
    //         },
    //         itemInDialog: {
    //             id: null,
    //             name: {
    //                 value: "First",
    //                 state: "success"
    //             },
    //             contact: {
    //                 value: null,
    //                 state: null
    //             }
    //         }
    //     };
    //     const action = {
    //         type: actionTypes.ADD_BRAND
    //     }
    //     assertInitialDialogState(state, action);
    //     assertInitialState(state, action);
    // });
});