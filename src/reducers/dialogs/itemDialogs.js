import actionTypes from '../../constants/actionTypes';
import dialogTitles from '../../constants/dialogTitles';
import dialogModes from '../../constants/dialogModes';

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

// const getDialogErrorState = (currentState) => {
//     return (currentState.itemInDialog.name.state === "success") ? false : true
//     return false;
// }

const itemDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_ITEM_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                open: true,
                title: dialogTitles.ADD_ITEM,
                mode: dialogModes.ADD_MODE,
                editable: true
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
                        value: action.item.price,
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
            return initialState;
        case actionTypes.ENABLE_EDITABLE:
            return {...state, dialogState: {
                ...state.dialogState, editable: true
            }};
        // case actionTypes.UPDATE_BRAND_NAME_FIELD:
        //     return {...state, itemInDialog: {
        //         ...state.itemInDialog, name: {
        //             value: action.name,
        //             state: action.name ? "success" : null
        //         }
        //     }};
        // case actionTypes.ADD_BRAND:
        //     {
        //         let dialogStateError = getDialogErrorState(state);
        //         if (dialogStateError) {
        //             return {
        //                 dialogState: {
        //                     ...state.dialogState,
        //                     error: dialogStateError
        //                 },
        //                 itemInDialog: {...state.itemInDialog,
        //                     name: {...state.itemInDialog.name,
        //                         state: state.itemInDialog.name.state !== "success" ? "error" : "success"}
        //                 }
        //             }
        //         }
        //         return initialState;
        //     }
        // case actionTypes.SAVE_BRAND:
        //     {
        //         let dialogStateError = getDialogErrorState(state);
        //         if (dialogStateError) {
        //             return {
        //                 dialogState: {
        //                     ...state.dialogState,
        //                     error: dialogStateError
        //                 },
        //                 itemInDialog: {...state.itemInDialog,
        //                     name: {...state.itemInDialog.name,
        //                         state: state.itemInDialog.name.state !== "success" ? "error" : "success"}
        //                 }
        //             }
        //         }
        //         return initialState;
        //     }
        default:
            return state;
    }
}

export default itemDialogs;