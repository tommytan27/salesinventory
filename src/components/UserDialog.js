import React from 'react';
import { Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import dialogModes from '../constants/dialogModes';
import styles from './../constants/styles';
import { PropTypes } from 'prop-types';
import Dialog from './Dialog';

class UserDialog extends Dialog {    
    renderConfirmPasswordHelpBlock = (state) => {
        if (state === "error") {
            return (<HelpBlock>Password did not match</HelpBlock>);
        }
        return;
    }

    renderPasswordHelpBlock = (state) => {
        switch (state) {
            case "error":
                return (<HelpBlock>Bad password.</HelpBlock>);
            case "warning":
                return (<HelpBlock>Weak password.</HelpBlock>);
            case "success":
                return (<HelpBlock>Strong password.</HelpBlock>);
        }
        return;
    }

    renderUsernameHelpBlock = (state) => {
        if (state === "error") {
            return (<HelpBlock>Username is invalid. Try other username.</HelpBlock>);
        }
        return;
    }

    renderPasswordAndConfirmPasswordField = (user) => {
        if (this.props.dialogState.mode === dialogModes.ADD_MODE) {
            return (
                <div>
                    <FormGroup validationState={user.password.state}>     
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl type="password" placeholder="Password"
                            value={user.password.value ? user.password.value : ""}
                            onChange={ (e) => {this.props.onPasswordFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                        {this.renderPasswordHelpBlock(user.password.state)}
                    </FormGroup>
                    <FormGroup validationState={user.confirmPassword.state}>     
                        <ControlLabel>Confirm Password:</ControlLabel>
                        <FormControl type="password" placeholder="Confirm Password"
                            value={user.confirmPassword.value ? user.confirmPassword.value : ""}
                            onChange={ (e) => {this.props.onConfirmPasswordFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                        {this.renderConfirmPasswordHelpBlock(user.confirmPassword.state)}
                    </FormGroup>
                </div>
            );
        }
        return;
    }

    render() { 
        const user = this.props.userInDialog;
        const usernameFieldDisabled = this.props.dialogState.mode === dialogModes.ADD_MODE ? false : true;
        return (
            <DialogContainer id="UserDialog" title={this.props.dialogState.title}
                visible={this.props.dialogState.open} dialogStyle={styles.dialog}
                actions={this.getDialogActions()} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                <FormGroup validationState={user.username.state}>
                    <ControlLabel>Username:</ControlLabel>
                    <FormControl type="text" placeholder="Username"
                        value={user.username.value ? user.username.value : ""}
                        disabled={usernameFieldDisabled}
                        onChange={ (e) => {this.props.onUsernameFieldChange(e.target.value, this.props.users)} } />
                    <FormControl.Feedback />
                    {this.renderUsernameHelpBlock(user.username.state)}
                </FormGroup>
                {this.renderPasswordAndConfirmPasswordField(user)}
                <FormGroup validationState={user.timeout.state}>     
                    <ControlLabel>Timeout (minutes):</ControlLabel>
                    <FormControl type="text" placeholder="0"
                        value={user.timeout.value ? user.timeout.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onTimeoutFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
            </DialogContainer>
        );
    }
}

UserDialog.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            timeout: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    dialogState: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        mode: PropTypes.string,
        editable: PropTypes.bool.isRequired
    }).isRequired,
    userInDialog: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        timeout: PropTypes.shape({
            value: PropTypes.number,
            state: PropTypes.string
        }),
        password: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        confirmPassword: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        })
    }).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onUsernameFieldChange: PropTypes.func.isRequired,
    onTimeoutFieldChange: PropTypes.func.isRequired,
    onPasswordFieldChange: PropTypes.func.isRequired,
    onConfirmPasswordFieldChange: PropTypes.func.isRequired
}

export default UserDialog;
