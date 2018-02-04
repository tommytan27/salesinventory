import actionTypes from './../constants/actionTypes';
import dialogTitles from '../constants/dialogTitles';
import dialogModes from '../constants/dialogModes';

const initialState = {
    dialogState: {
        open: false,
        title: "",
        mode: null,
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
}

const getDialogErrorState = (currentState) => {
    // return (currentState.supplierInDialog.firstName.state === "success" &&
    //     currentState.supplierInDialog.lastName.state === "success") ? false : true
    return false;
}

const supplierDialogs = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.OPEN_ADD_CUSTOMER_DIALOG:
        //     return {...state, dialogState: {...state.dialogState,
        //         open: true,
        //         title: dialogTitles.ADD_CUSTOMER,
        //         mode: dialogModes.ADD_MODE,
        //         editable: true
        //     }};
        // case actionTypes.OPEN_EDIT_CUSTOMER_DIALOG:
        //     return {...state, dialogState: {...state.dialogState,
        //             open: true,
        //             title: dialogTitles.EDIT_CUSTOMER,
        //             mode: dialogModes.EDIT_MODE,
        //             editable: false
        //         },
        //         supplierInDialog: {
        //             ...state.supplierInDialog,
        //             id: action.customer.id,
        //             firstName: {
        //                 value: action.customer.firstName,
        //                 state: "success"
        //             },
        //             lastName: {
        //                 value: action.customer.lastName,
        //                 state: "success"
        //             },
        //             contact: {
        //                 value: action.customer.contact,
        //                 state: action.customer.contact ? "success" : null
        //             },
        //             credit: action.customer.credit
        //         }
        //     };
        // case actionTypes.CLOSE_CUSTOMER_DIALOG:
        //     return initialState;
        // case actionTypes.ENABLE_EDITABLE:
        //     return {...state, dialogState: {
        //         ...state.dialogState, editable: true
        //     }};
        // case actionTypes.UPDATE_FIRSTNAME_FIELD:
        //     return {...state, supplierInDialog: {
        //         ...state.supplierInDialog, firstName: {
        //             value: action.firstName,
        //             state: action.firstName ? "success" : null
        //         }
        //     }}
        // case actionTypes.UPDATE_LASTNAME_FIELD:
        //     return {...state, supplierInDialog: {
        //         ...state.supplierInDialog, lastName: {
        //             value: action.lastName,
        //             state: action.lastName ? "success" : null
        //         }
        //     }}
        // case actionTypes.UPDATE_CONTACT_FIELD:
        //     return {...state, supplierInDialog: {
        //         ...state.supplierInDialog, contact: {
        //             value: action.contact,
        //             state: action.contact ? "success" : null
        //         }
        //     }}
        // case actionTypes.ADD_CUSTOMER:
        //     {
        //         let dialogStateError = getDialogErrorState(state);
        //         if (dialogStateError) {
        //             return {
        //                 dialogState: {
        //                     ...state.dialogState,
        //                     error: dialogStateError
        //                 },
        //                 supplierInDialog: {...state.supplierInDialog,
        //                     firstName: {...state.supplierInDialog.firstName,
        //                         state: state.supplierInDialog.firstName.state !== "success" ? "error" : "success"},
        //                     lastName: {...state.supplierInDialog.lastName,
        //                         state: (state.supplierInDialog.lastName.state !== "success" &&
        //                             state.supplierInDialog.lastName.state !== "warning") ? "error" : 
        //                             state.supplierInDialog.lastName.state}
        //                 }
        //             }
        //         }
        //         return initialState;
        //     }
        // case actionTypes.SAVE_CUSTOMER:
        //     {
        //         let dialogStateError = getDialogErrorState(state);
        //         if (dialogStateError) {
        //             return {
        //                 dialogState: {
        //                     ...state.dialogState,
        //                     error: dialogStateError
        //                 },
        //                 supplierInDialog: {...state.supplierInDialog,
        //                     firstName: {...state.supplierInDialog.firstName,
        //                         state: state.supplierInDialog.firstName.state !== "success" ? "error" : "success"},
        //                     lastName: {...state.supplierInDialog.lastName,
        //                         state: (state.supplierInDialog.lastName.state !== "success" &&
        //                             state.supplierInDialog.lastName.state !== "warning") ? "error" : 
        //                             state.supplierInDialog.lastName.state}
        //                 }
        //             }
        //         }
        //         return initialState;
        //     }
        default:
            return state;
    }
}

export default supplierDialogs;