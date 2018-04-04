import { connect } from "react-redux";
import LoginDialog from "../../components/dialogs/LoginDialog";
import { closeLoginDialog, signalRLoginUser,
     updateUsernameField, updatePasswordField } from "../../actions";

const mapStateToProps = (state) => {
    return {
        loginDialogs: state.loginDialogs,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeLoginDialog()); },
        onLoginButtonClick: (username, password) => { dispatch(signalRLoginUser(username, password)); },
        onUsernameFieldChange: (username, allUsers) => { dispatch(updateUsernameField(username, allUsers)); },
        onPasswordFieldChange: (password) => { dispatch(updatePasswordField(password)); }
    };
}

const SystemLoginDialog = connect(
    mapStateToProps, mapDispatchToProps
)(LoginDialog);

export default SystemLoginDialog;