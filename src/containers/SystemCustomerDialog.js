import { connect } from "react-redux";
import CustomerDialog from "../components/CustomerDialog";
// import { closeUserDialog, enableEditable, updateUsernameField, 
//     updateTimeoutField, updatePasswordField, updateConfirmPasswordField } from "../actions/index";

const mapStateToProps = (state) => {
    return {
        // users: state.users,
        dialogState: state.customerDialogs.dialogState,
        customerInDialog: state.customerDialogs.customerInDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onDialogClose: () => { dispatch(closeUserDialog()) },
        // onEditButtonClick: () => { dispatch(enableEditable()) },
        // onUsernameFieldChange: (username, allUsers) => { dispatch(updateUsernameField(username, allUsers)) },
        // onTimeoutFieldChange: (timeout) => { dispatch(updateTimeoutField(timeout)) },
        // onPasswordFieldChange: (password) => { dispatch(updatePasswordField(password)) },
        // onConfirmPasswordFieldChange: (confirmPassword) => { dispatch(updateConfirmPasswordField(confirmPassword)) }
    };
}

const SystemCustomerDialog = connect(
    mapStateToProps, mapDispatchToProps
)(CustomerDialog);

export default SystemCustomerDialog;