import { connect } from "react-redux";
import UserDialog from "../../components/dialogs/UserDialog";
import { closeUserDialog, enableEditable, updateUsernameField, 
    signalRAddUser, signalRSaveUser,
    updateTimeoutField, updatePasswordField, updateConfirmPasswordField } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        users: state.users,
        dialogState: state.userDialogs.dialogState,
        userInDialog: state.userDialogs.userInDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeUserDialog()) },
        onEditButtonClick: () => { dispatch(enableEditable()) },
        onUsernameFieldChange: (username, allUsers) => { dispatch(updateUsernameField(username, allUsers)) },
        onTimeoutFieldChange: (timeout) => { dispatch(updateTimeoutField(timeout)) },
        onPasswordFieldChange: (password) => { dispatch(updatePasswordField(password)) },
        onConfirmPasswordFieldChange: (confirmPassword) => { dispatch(updateConfirmPasswordField(confirmPassword)) },
        onAddButtonClick: () => { dispatch(signalRAddUser()) },
        onSaveButtonClick: () => { dispatch(signalRSaveUser()) }
    };
}

const SystemUserDialog = connect(
    mapStateToProps, mapDispatchToProps
)(UserDialog);

export default SystemUserDialog;