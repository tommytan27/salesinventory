import itemDialogs from './../../reducers/dialogs/itemDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogModes from './../../constants/dialogModes';
import dialogTitles from './../../constants/dialogTitles';

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
const dummyPrice = 5.50;
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

const assertOpenAddItemDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.ADD_ITEM);
    expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
    expect(state.dialogState.editable).toBeTruthy();
}

const assertOpenEditItemDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.EDIT_ITEM);
    expect(state.dialogState.mode).toEqual(dialogModes.EDIT_MODE);
    expect(state.dialogState.editable).toEqual(false);
}

const assertAddAndSaveBrand = (returnValue) => {
    expect(returnValue.itemInDialog.barcode.state).toBe("error");
    expect(returnValue.itemInDialog.name.state).toBe("error");
    expect(returnValue.itemInDialog.price.state).toBe("error");
}

describe('itemDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    it('should return item dialog opened when receiving OPEN_ADD_ITEM_DIALOG action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.OPEN_ADD_ITEM_DIALOG
        });
        assertOpenAddItemDialog(returnValue);
    });
    it('should return item dialog opened but not in edit mode when receiving OPEN_EDIT_ITEM_DIALOG action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_ITEM_DIALOG,
            item: dummyItem
        });
        assertOpenEditItemDialog(returnValue);
    });
    it('should return item dialog opened with vegan false when receiving OPEN_ADD_ITEM_DIALOG action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.OPEN_ADD_ITEM_DIALOG
        });
        expect(returnValue.itemInDialog.vegan).toBeFalsy();
    });
    it('should return item dialog opened with supplierId and brandId set to 1 when receiving OPEN_ADD_ITEM_DIALOG action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.OPEN_ADD_ITEM_DIALOG
        });
        expect(returnValue.itemInDialog.supplierId).toBe(1);
        expect(returnValue.itemInDialog.brandId).toBe(1);
    });
    it('should return item dialog opened after closed when receiving OPEN_ADD_ITEM_DIALOG action', () => {
        const returnValue = itemDialogs({
            dialogState: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_ITEM_DIALOG
        });
        assertOpenAddItemDialog(returnValue);
    });
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
    it('should return selected item record when receiving OPEN_EDIT_ITEM_DIALOG action', () => {        
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
            .price.value).toEqual(dummyItem.price.toFixed(2));
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
    it('should return the modified name field with success state when receiving UPDATE_ITEM_NAME_FIELD action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_ITEM_NAME_FIELD,
            name: dummyItemName
        });
        expect(returnValue.itemInDialog
            .name.value).toEqual(dummyItemName);
        expect(returnValue.itemInDialog
            .name.state).toEqual("success");
    });
    it('should return the empty name field with null state when receiving UPDATE_ITEM_NAME_FIELD action with empty firstName', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_ITEM_NAME_FIELD,
            name: ""
        });
        expect(returnValue.itemInDialog
            .name.value).toEqual("");
        expect(returnValue.itemInDialog
            .name.state).toBeNull();
    });
    it('should return the modified barcode field with success state when receiving UPDATE_BARCODE_FIELD action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_BARCODE_FIELD,
            barcode: dummyBarcode
        });
        expect(returnValue.itemInDialog
            .barcode.value).toEqual(dummyBarcode);
        expect(returnValue.itemInDialog
            .barcode.state).toEqual("success");
    });
    it('should return the empty barcode field with null state when receiving UPDATE_BARCODE_FIELD action with empty firstName', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_BARCODE_FIELD,
            barcode: ""
        });
        expect(returnValue.itemInDialog
            .barcode.value).toEqual("");
        expect(returnValue.itemInDialog
            .barcode.state).toBeNull();
    });
    it('should return the modified qty field with success state when receiving UPDATE_QTY_FIELD action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: dummyQty
        });
        expect(returnValue.itemInDialog.qty.value).toEqual(dummyQty);
        expect(returnValue.itemInDialog.qty.state).toEqual("success");
    });   
    it('should return NaN qty field with null state when receiving UPDATE_QTY_FIELD action with empty qty', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: ""
        });
        expect(returnValue.itemInDialog.qty.value).toEqual(NaN);
        expect(returnValue.itemInDialog.qty.state).toBeNull();
    });  
    it('should return the last valid qty field with success state when receiving UPDATE_QTY_FIELD action with invalid qty', () => {
        const returnValue = itemDialogs({
            itemInDialog: {
                qty: {
                    value: 15,
                    state: "success"
                }
            }
        }, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: "15s"
        });
        expect(returnValue.itemInDialog.qty.value).toEqual(15);
        expect(returnValue.itemInDialog.qty.state).toEqual("success");
    }); 
    it('should return NaN or null qty field with null state when receiving UPDATE_QTY_FIELD action with invalid qty from empty', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: "s"
        });
        expect(returnValue.itemInDialog.qty.value).toEqual(NaN);
        expect(returnValue.itemInDialog.qty.state).toBeNull;
    });
    it('should return the modified price field with success state when receiving UPDATE_SELL_PRICE_FIELD action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: dummyPrice
        });
        expect(returnValue.itemInDialog.price.value).toEqual(dummyPrice);
        expect(returnValue.itemInDialog.price.state).toEqual("success");
    });   
    it('should return empty price field with null state when receiving UPDATE_SELL_PRICE_FIELD action with empty price', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: ""
        });
        expect(returnValue.itemInDialog.price.value).toEqual("");
        expect(returnValue.itemInDialog.price.state).toBeNull();
    });  
    it('should return the last valid price field with success state when receiving UPDATE_SELL_PRICE_FIELD action with invalid price', () => {
        const returnValue = itemDialogs({
            itemInDialog: {
                price: {
                    value: "15",
                    state: "success"
                }
            }
        }, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "15s"
        });
        expect(returnValue.itemInDialog.price.value).toEqual("15");
        expect(returnValue.itemInDialog.price.state).toEqual("success");
    }); 
    it('should return empty/null price field with null state when receiving UPDATE_SELL_PRICE_FIELD action with invalid price from empty', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "s"
        });
        expect(returnValue.itemInDialog.price.value).toBeNull;
        expect(returnValue.itemInDialog.price.state).toBeNull;
    });
    it('should return modified price field including point value with success state when receiving UPDATE_SELL_PRICE_FIELD action with decimal price', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "20."
        });
        expect(returnValue.itemInDialog.price.value).toEqual("20.");
        expect(returnValue.itemInDialog.price.state).toEqual("success");
    });
    it('should return modified price field including decimal value with success state when receiving UPDATE_SELL_PRICE_FIELD action with decimal price', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "20.2"
        });
        expect(returnValue.itemInDialog.price.value).toEqual("20.2");
        expect(returnValue.itemInDialog.price.state).toEqual("success");
    });
    it('should return the modified vegan flag when receiving TOGGLE_VEGAN_FLAG action', () => {
        const returnValue = itemDialogs({
            itemInDialog: dummyItem
        }, {
            type: actionTypes.TOGGLE_VEGAN_FLAG,
        });
        expect(returnValue.itemInDialog
            .vegan).toEqual(!dummyVegan);
    });
    it('should return the modified supplier field when receiving SELECT_SUPPLIER action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.SELECT_SUPPLIER,
            supplierId: dummySupplierId
        });
        expect(returnValue.itemInDialog
            .supplierId).toEqual(dummySupplierId);
    });
    it('should return the modified brand field when receiving SELECT_BRAND action', () => {
        const returnValue = itemDialogs(undefined, {
            type: actionTypes.SELECT_BRAND,
            brandId: dummyBrandId
        });
        expect(returnValue.itemInDialog
            .brandId).toEqual(dummyBrandId);
    });
    it('should return all null required fields with error state and dialogState of error when receiving ADD_ITEM action', () => {
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            itemInDialog: {
                barcode: {
                    value: null,
                    state: null
                },
                name: {
                    value: null,
                    state: null
                },
                price: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_ITEM
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving ADD_ITEM action', () => {
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            itemInDialog: {
                barcode: {
                    value: "",
                    state: null
                },
                name: {
                    value: "",
                    state: null
                },
                price: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_ITEM
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return all null required fields with error state and dialogState of error when receiving SAVE_ITEM action', () => {
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            itemInDialog: {
                barcode: {
                    value: null,
                    state: null
                },
                name: {
                    value: null,
                    state: null
                },
                price: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_ITEM
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving SAVE_ITEM action', () => {
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            itemInDialog: {
                barcode: {
                    value: "",
                    state: null
                },
                name: {
                    value: "",
                    state: null
                },
                price: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_ITEM
        });
        assertAddAndSaveBrand(returnValue);
    });
    it('should return the state of all fields that are success and dialogState of error when receiving ADD_ITEM action with an empty firstName', () => {
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.ADD_ITEM,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            itemInDialog: {
                barcode: {
                    value: "153156",
                    state: "success"
                },
                name: {
                    value: "",
                    state: null
                },
                price: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_ITEM
        });
        expect(returnValue.itemInDialog.barcode.state).toBe("success");
        expect(returnValue.itemInDialog.name.state).toBe("error");
        expect(returnValue.itemInDialog.price.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the state of all fields that are success and dialogState of error when receiving SAVE_ITEM action with an empty firstName', () => {
        const returnValue = itemDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_ITEM,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            itemInDialog: {
                barcode: {
                    value: "153156",
                    state: "success"
                },
                name: {
                    value: "",
                    state: null
                },
                price: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_ITEM
        });
        expect(returnValue.itemInDialog.barcode.state).toBe("success");
        expect(returnValue.itemInDialog.name.state).toBe("error");
        expect(returnValue.itemInDialog.price.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the initial state when receiving SAVE_ITEM action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_ITEM,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },            
            itemInDialog: {
                barcode: {
                    value: "1351351",
                    state: "success"
                },
                name: {
                    value: "testName",
                    state: "success"
                },
                price: {
                    value: "5.30",
                    state: "success"
                },
                supplierId: 1,
                brandId: 2
            }
        };
        const action = {
            type: actionTypes.SAVE_ITEM
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving ADD_ITEM action with an valid input', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_ITEM,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            itemInDialog: {
                barcode: {
                    value: "1351351",
                    state: "success"
                },
                name: {
                    value: "testName",
                    state: "success"
                },
                price: {
                    value: "5.30",
                    state: "success"
                },
                supplierId: 1,
                brandId: 2
            }
        };
        const action = {
            type: actionTypes.ADD_ITEM
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
});