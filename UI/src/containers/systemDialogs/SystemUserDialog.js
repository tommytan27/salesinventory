import { connect } from "react-redux";
import UserDialog from "../../components/dialogs/UserDialog";
import { closeUserDialog, enableEditable, updateUsernameField, 
    serverAddUser, serverSaveUser,
    updateTimeoutField, updatePasswordField, updateConfirmPasswordField, serverDeleteUser } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        activeAdmin: state.activeAdmin,
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
        onAddButtonClick: () => { dispatch(serverAddUser()) },
        onSaveButtonClick: () => { dispatch(serverSaveUser()) },
        onDeleteButtonClick: () => { dispatch(serverDeleteUser()); }
    };
}

const SystemUserDialog = connect(
    mapStateToProps, mapDispatchToProps
)(UserDialog);

export default SystemUserDialog;