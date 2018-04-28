import actionTypes from '../../constants/actionTypes';
import dialogTitles from '../../constants/dialogTitles';
import dialogModes from '../../constants/dialogModes';
import { validateDecimal } from '../../utils/validators';

const initialState = {
    dialogState: {
        open: false,
        title: "",
        mode: null,
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
        supplierId: null,
        brandId: null,
        price: {
            value: null,
            state: null
        },
        vegan: null,
        qty: {
            value: null,
            state: null
        }
    }
}

const itemDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_ITEM_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                open: true,
                title: dialogTitles.ADD_ITEM,
                mode: dialogModes.ADD_MODE,
                editable: true
            }, itemInDialog: {
                ...state.itemInDialog,
                vegan: false,
                supplierId: 1,
                brandId: 1
            }};
        case actionTypes.OPEN_EDIT_ITEM_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                    open: true,
                    title: dialogTitles.EDIT_ITEM,
                    mode: dialogModes.EDIT_MODE,
                    editable: false
                },
                itemInDialog: {
                    ...state.itemInDialog,
                    barcode: {
                        value: action.item.barcode,
                        state: "success"
                    },
                    name: {
                        value: action.item.name,
                        state: "success"
                    },
                    supplierId: action.item.supplierId,
                    brandId: action.item.brandId,
                    price: {
                        value: action.item.price.toFixed(2),
                        state: "success"
                    },
                    vegan: action.item.vegan,
                    qty: {
                        value: action.item.qty,
                        state: "success"
                    }
                }
            };
        case actionTypes.CLOSE_ITEM_DIALOG:
        case actionTypes.ADD_ITEM:
        case actionTypes.SAVE_ITEM:
            return initialState;
        case actionTypes.ENABLE_EDITABLE:
            return {...state, dialogState: {
                ...state.dialogState, editable: true
            }};
        case actionTypes.UPDATE_ITEM_NAME_FIELD:
            return {...state, itemInDialog: {
                ...state.itemInDialog, name: {
                    value: action.name,
                    state: action.name ? "success" : null
                }
            }};
        case actionTypes.UPDATE_BARCODE_FIELD:
            return {...state, itemInDialog: {
                ...state.itemInDialog, barcode: {
                    value: action.barcode,
                    state: action.barcode ? "success" : null
                }
            }};
        case actionTypes.UPDATE_QTY_FIELD:
            return {...state, itemInDialog: {
                ...state.itemInDialog, qty: {
                    value: Number.parseInt(action.qty),
                    state: Number.parseInt(action.qty) ? "success" : null
                }
            }};
        case actionTypes.UPDATE_SELL_PRICE_FIELD:
            return {...state, itemInDialog: {
                ...state.itemInDialog, price: {
                    value: validateDecimal(action.price) ? action.price : state.itemInDialog.price.value,
                    state: action.price ? (validateDecimal(action.price) ? "success" : state.itemInDialog.price.state) : null
                }
            }};
        case actionTypes.TOGGLE_VEGAN_FLAG:
            return {...state, itemInDialog: {
                ...state.itemInDialog, 
                vegan: !state.itemInDialog.vegan
            }};
        case actionTypes.SELECT_SUPPLIER:
            return {...state, itemInDialog: {
                ...state.itemInDialog, supplierId: action.supplierId
            }};
        case actionTypes.SELECT_BRAND:
            return {...state, itemInDialog: {
                ...state.itemInDialog, brandId: action.brandId
            }};
        case actionTypes.FAIL_ADD_ITEM:
            return {
                dialogState: {
                    ...state.dialogState,
                    error: true
                },
                itemInDialog: {...state.itemInDialog,
                    barcode: {...state.itemInDialog.barcode,
                        state: state.itemInDialog.barcode.state !== "success" ? "error" : "success"},
                    name: {...state.itemInDialog.name,
                        state: state.itemInDialog.name.state !== "success" ? "error" : "success"},
                    price: {...state.itemInDialog.price,
                        state: state.itemInDialog.price.state !== "success" ? "error" : "success"}
                }
            };
        case actionTypes.FAIL_SAVE_ITEM:
            return {
                dialogState: {
                    ...state.dialogState,
                    error: true
                },
                itemInDialog: {...state.itemInDialog,
                    barcode: {...state.itemInDialog.barcode,
                        state: state.itemInDialog.barcode.state !== "success" ? "error" : "success"},
                    name: {...state.itemInDialog.name,
                        state: state.itemInDialog.name.state !== "success" ? "error" : "success"},
                    price: {...state.itemInDialog.price,
                        state: state.itemInDialog.price.state !== "success" ? "error" : "success"}
                }
            };
        default:
            return state;
    }
}

export default itemDialogs;