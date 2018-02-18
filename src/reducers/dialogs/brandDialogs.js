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
    brandInDialog: {
        id: null,
        name: {
            value: null,
            state: null
        }
    }
}

const getDialogErrorState = (currentState) => {
    return (currentState.brandInDialog.name.state === "success") ? false : true
    return false;
}

const brandDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_BRAND_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                open: true,
                title: dialogTitles.ADD_BRAND,
                mode: dialogModes.ADD_MODE,
                editable: true
            }};
        case actionTypes.OPEN_EDIT_BRAND_DIALOG:
            return {...state, dialogState: {...state.dialogState,
                    open: true,
                    title: dialogTitles.EDIT_BRAND,
                    mode: dialogModes.EDIT_MODE,
                    editable: false
                },
                brandInDialog: {
                    ...state.brandInDialog,
                    id: action.brand.id,
                    name: {
                        value: action.brand.name,
                        state: "success"
                    }
                }
            };
        case actionTypes.CLOSE_BRAND_DIALOG:
            return initialState;
        case actionTypes.ENABLE_EDITABLE:
            return {...state, dialogState: {
                ...state.dialogState, editable: true
            }};
        case actionTypes.UPDATE_BRAND_NAME_FIELD:
            return {...state, brandInDialog: {
                ...state.brandInDialog, name: {
                    value: action.name,
                    state: action.name ? "success" : null
                }
            }};
        case actionTypes.ADD_BRAND:
            {
                let dialogStateError = getDialogErrorState(state);
                if (dialogStateError) {
                    return {
                        dialogState: {
                            ...state.dialogState,
                            error: dialogStateError
                        },
                        brandInDialog: {...state.brandInDialog,
                            name: {...state.brandInDialog.name,
                                state: state.brandInDialog.name.state !== "success" ? "error" : "success"}
                        }
                    }
                }
                return initialState;
            }
        case actionTypes.SAVE_BRAND:
            {
                let dialogStateError = getDialogErrorState(state);
                if (dialogStateError) {
                    return {
                        dialogState: {
                            ...state.dialogState,
                            error: dialogStateError
                        },
                        brandInDialog: {...state.brandInDialog,
                            name: {...state.brandInDialog.name,
                                state: state.brandInDialog.name.state !== "success" ? "error" : "success"}
                        }
                    }
                }
                return initialState;
            }
        default:
            return state;
    }
}

export default brandDialogs;