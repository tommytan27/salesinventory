import actionTypes from './../constants/actionTypes';
import dialogTitles from '../constants/dialogTitles';
import dialogModes from '../constants/dialogModes';

const initialState = {
    dialogState: {
        open: false,
        title: "",
        mode: null,
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

const customerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_CUSTOMER_DIALOG:
            return {...state, dialogState: {
                open: true,
                title: dialogTitles.ADD_CUSTOMER,
                mode: dialogModes.ADD_MODE,
                editable: true
            }};
        case actionTypes.OPEN_EDIT_CUSTOMER_DIALOG:
            return {...state, 
                dialogState: {
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
                        state: "success"
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
        default:
            return state;
    }
}

export default customerDialogs;