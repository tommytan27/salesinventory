import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, DatePicker } from 'react-md';
import { Form, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import styles from './../../constants/styles';

class LoginDialog extends React.Component {
    renderDialogContent = (loginDialogs) => {
        if (loginDialogs.timeOutPrompt) {
            return (
                <p style={styles.paragraph}>Admin session timeout has been reached. Return to the main page.</p>
            );
        }
        let user = loginDialogs.userInDialog;
        return (
            <div>
                <FormGroup validationState={user.username.state}>
                    <ControlLabel>Username:</ControlLabel>
                    <FormControl type="text" placeholder="Username"
                        ref={(username) => { this.userField = username; }} 
                        value={user.username.value ? user.username.value : ""}
                        onChange={ (e) => {this.props.onUsernameFieldChange(e.target.value, this.props.users)} } />
                    <FormControl.Feedback />
                </FormGroup>            
                <FormGroup validationState={user.password.state}>     
                    <ControlLabel>Password:</ControlLabel>
                    <FormControl type="password" placeholder="Password"
                        ref={(password) => { this.passField = password; }} 
                        value={user.password.value ? user.password.value : ""}
                        onChange={ (e) => {this.props.onPasswordFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
        );
    }

    renderDialogError = (renderError) => {
        if (renderError) {
            return (
                <Alert bsStyle="danger">
                    <strong>Error: </strong>The username/password entered is incorrect.
                </Alert>
            );
        }
        return;
    }

    render() {         
        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="cancelButton">CLOSE</Button>
        ];

        if (!this.props.loginDialogs.timeOutPrompt) {
            actions.push(
                <Button primary flat iconChildren="input" 
                    onClick={() => {this.props.onLoginButtonClick(
                            this.props.loginDialogs.userInDialog.username.value,
                            this.props.loginDialogs.userInDialog.password.value)}}
                    disabled={!this.props.loginDialogs.loginable}>
                    LOGIN
                </Button>
            );
        }
        
        return (
            <DialogContainer id="LoginDialog" title={this.props.loginDialogs.title}
                visible={this.props.loginDialogs.open} contentStyle={{maxHeight: "auto"}}
                actions={actions} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                {this.renderDialogError(this.props.loginDialogs.error)}
                {this.renderDialogContent(this.props.loginDialogs)}
            </DialogContainer>
        );
    }
}

LoginDialog.propTypes = {
    loginDialogs: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        title: PropTypes.string,
        error: PropTypes.bool.isRequired,
        timeOutPrompt: PropTypes.bool.isRequired,
        loginable: PropTypes.bool.isRequired,
        userInDialog: PropTypes.shape({
            username: PropTypes.shape({
                value: PropTypes.string,
                state: PropTypes.string,
            }).isRequired,
            password: PropTypes.shape({
                value: PropTypes.string,
                state: PropTypes.string,
            }).isRequired
        }).isRequired
    }).isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            timeout: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onLoginButtonClick: PropTypes.func.isRequired,
    onUsernameFieldChange: PropTypes.func.isRequired,
    onPasswordFieldChange: PropTypes.func.isRequired
}

export default LoginDialog;
