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

const supplierDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_SUPPLIER_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                open: true,
                title: dialogTitles.ADD_SUPPLIER,
                mode: dialogModes.ADD_MODE,
                editable: true
            }};
        case actionTypes.OPEN_EDIT_SUPPLIER_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                    open: true,
                    title: dialogTitles.EDIT_SUPPLIER,
                    mode: dialogModes.EDIT_MODE,
                    editable: false
                },
                supplierInDialog: {
                    ...state.supplierInDialog,
                    id: action.supplier.id,
                    name: {
                        value: action.supplier.name,
                        state: "success"
                    },
                    contact: {
                        value: action.supplier.contact,
                        state: action.supplier.contact ? "success" : null
                    }
                }
            };
        case actionTypes.CLOSE_SUPPLIER_DIALOG:
        case actionTypes.ADD_SUPPLIER:
        case actionTypes.SAVE_SUPPLIER:
        case actionTypes.DELETE_SUPPLIER:
        case actionTypes.CHANGE_MODE_USER:
        case actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT:
        case actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU:
            return initialState;
        case actionTypes.ENABLE_EDITABLE:
            return {...state, dialogState: {
                ...state.dialogState, editable: true
            }};
        case actionTypes.UPDATE_SUPPLIER_NAME_FIELD:
            return {...state, supplierInDialog: {
                ...state.supplierInDialog, name: {
                    value: action.name,
                    state: action.name ? "success" : null
                }
            }}
        case actionTypes.UPDATE_CONTACT_FIELD:
            return {...state, supplierInDialog: {
                ...state.supplierInDialog, contact: {
                    value: action.contact,
                    state: action.contact ? "success" : null
                }
            }}
        case actionTypes.FAIL_ADD_SUPPLIER:
            return {
                dialogState: {
                    ...state.dialogState,
                    error: true
                },
                supplierInDialog: {...state.supplierInDialog,
                    name: {...state.supplierInDialog.name,
                        state: state.supplierInDialog.name.state !== "success" ? "error" : "success"}
                }
            };
        case actionTypes.FAIL_SAVE_SUPPLIER:
            return {
                dialogState: {
                    ...state.dialogState,
                    error: true
                },
                supplierInDialog: {...state.supplierInDialog,
                    name: {...state.supplierInDialog.name,
                        state: state.supplierInDialog.name.state !== "success" ? "error" : "success"}
                }
            };
        default:
            return state;
    }
}

export default supplierDialogs;