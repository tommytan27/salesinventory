import { connect } from "react-redux";
import LoginDialog from "../../components/dialogs/LoginDialog";
import { closeLoginDialog, updateUsernameField, changeModeAdmin } from "../../actions";

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        loginDialogs: state.loginDialogs,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeLoginDialog()); },
        // onUsernameFieldChange: (username, allUsers) => { dispatch(updateUsernameField(username, allUsers)) },
        // onPasswordFieldChanged: (password) => { dispatch(updatePasswordField(password)) }
        onLoginButtonClick: () => { dispatch(changeModeAdmin(10)); }
    };
}

const SystemLoginDialog = connect(
    mapStateToProps, mapDispatchToProps
)(LoginDialog);

export default SystemLoginDialog;