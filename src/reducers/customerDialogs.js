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
}

const getDialogErrorState = (currentState) => {
    return (currentState.customerInDialog.firstName.state === "success" &&
        currentState.customerInDialog.lastName.state === "success") ? false : true
}

const customerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_CUSTOMER_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                open: true,
                title: dialogTitles.ADD_CUSTOMER,
                mode: dialogModes.ADD_MODE,
                editable: true
            }};
        case actionTypes.OPEN_EDIT_CUSTOMER_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                    open: true,
                    title: dialogTitles.EDIT_CUSTOMER,
                    mode: dialogModes.EDIT_MODE,
                    editable: false
                },
                customerInDialog: {
                    ...state.customerInDialog,
                    id: action.customer.id,
                    firstName: {
                        value: action.customer.firstName,
                        state: "success"
                    },
                    lastName: {
                        value: action.customer.lastName,
                        state: "success"
                    },
                    contact: {
                        value: action.customer.contact,
                        state: action.customer.contact ? "success" : null
                    },
                    credit: action.customer.credit
                }
            };
        case actionTypes.CLOSE_CUSTOMER_DIALOG:
            return initialState;
        case actionTypes.ENABLE_EDITABLE:
            return {...state, dialogState: {
                ...state.dialogState, editable: true
            }};
        case actionTypes.UPDATE_FIRSTNAME_FIELD:
            return {...state, customerInDialog: {
                ...state.customerInDialog, firstName: {
                    value: action.firstName,
                    state: action.firstName ? "success" : null
                }
            }}
        case actionTypes.UPDATE_LASTNAME_FIELD:
            return {...state, customerInDialog: {
                ...state.customerInDialog, lastName: {
                    value: action.lastName,
                    state: action.lastName ? "success" : null
                }
            }}
        case actionTypes.UPDATE_CONTACT_FIELD:
            return {...state, customerInDialog: {
                ...state.customerInDialog, contact: {
                    value: action.contact,
                    state: action.contact ? "success" : null
                }
            }}
        case actionTypes.ADD_CUSTOMER:
            {
                let dialogStateError = getDialogErrorState(state);
                if (dialogStateError) {
                    return {
                        dialogState: {
                            ...state.dialogState,
                            error: dialogStateError
                        },
                        customerInDialog: {...state.customerInDialog,
                            firstName: {...state.customerInDialog.firstName,
                                state: state.customerInDialog.firstName.state !== "success" ? "error" : "success"},
                            lastName: {...state.customerInDialog.lastName,
                                state: (state.customerInDialog.lastName.state !== "success" &&
                                    state.customerInDialog.lastName.state !== "warning") ? "error" : 
                                    state.customerInDialog.lastName.state}
                        }
                    }
                }
                return initialState;
            }
        case actionTypes.SAVE_CUSTOMER:
            {
                let dialogStateError = getDialogErrorState(state);
                if (dialogStateError) {
                    return {
                        dialogState: {
                            ...state.dialogState,
                            error: dialogStateError
                        },
                        customerInDialog: {...state.customerInDialog,
                            firstName: {...state.customerInDialog.firstName,
                                state: state.customerInDialog.firstName.state !== "success" ? "error" : "success"},
                            lastName: {...state.customerInDialog.lastName,
                                state: state.customerInDialog.lastName.state !== "success" ? "error" : "success"}
                            }
                        }
                }
                return initialState;
            }
        default:
            return state;
    }
}

export default customerDialogs;