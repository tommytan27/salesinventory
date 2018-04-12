import { connect } from "react-redux";
import CustomerDialog from "../../components/dialogs/CustomerDialog";
import { closeCustomerDialog, enableEditable, updateFirstNameField,
    updateLastNameField, updateContactField,  signalRAddCustomer, signalRSaveCustomer } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        dialogState: state.customerDialogs.dialogState,
        customerInDialog: state.customerDialogs.customerInDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeCustomerDialog()) },
        onEditButtonClick: () => { dispatch(enableEditable()) },
        onFirstNameFieldChange: (firstName) => { dispatch(updateFirstNameField(firstName)) },
        onLastNameFieldChange: (lastName) => { dispatch(updateLastNameField(lastName)) },        
        onContactFieldChange: (contact) => { dispatch(updateContactField(contact)) },
        onAddButtonClick: () => { dispatch(signalRAddCustomer()) },
        onSaveButtonClick: () => { dispatch(signalRSaveCustomer()) }
    };
}

const SystemCustomerDialog = connect(
    mapStateToProps, mapDispatchToProps
)(CustomerDialog);

export default SystemCustomerDialog;