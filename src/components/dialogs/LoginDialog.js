import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, DatePicker } from 'react-md';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Select from 'react-select';
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
                        value={user.username.value ? user.username.value : ""}
                        onChange={ (e) => {this.props.onUsernameFieldChange(e.target.value, this.props.users)} } />
                    <FormControl.Feedback />
                </FormGroup>            
                <FormGroup validationState={user.password.state}>     
                    <ControlLabel>Password:</ControlLabel>
                    <FormControl type="password" placeholder="Password"
                        value={user.password.value ? user.password.value : ""}
                        onChange={ (e) => {this.props.onPasswordFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
        );
    }

    render() {         
        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="cancelButton">CLOSE</Button>
        ];

        if (!this.props.loginDialogs.timeOutPrompt) {
            actions.push(
                <Button primary flat iconChildren="input" onClick={this.props.onLoginButtonClick}
                    disabled={!this.props.loginDialogs.loginable}
                >
                    LOGIN
                </Button>
            );
        }
        
        return (
            <DialogContainer id="LoginDialog" title={this.props.loginDialogs.title}
                visible={this.props.loginDialogs.open} dialogStyle={{width: styles.dialog}}
                actions={actions} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                {this.renderDialogContent(this.props.loginDialogs)}
            </DialogContainer>
        );
    }
}

LoginDialog.propTypes = {
    // activeTab: PropTypes.string.isRequired,
    // loginDialogs: PropTypes.shape({
    //     open: PropTypes.bool.isRequired,
    //     fromDate: PropTypes.string,
    //     toDate: PropTypes.string,
    //     customerId: PropTypes.number
    // }).isRequired,
    // onDialogClose: PropTypes.func.isRequired,
    // customers: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         firstName: PropTypes.string.isRequired,
    //         lastName: PropTypes.string.isRequired,
    //         contact: PropTypes.string.isRequired,
    //         credit: PropTypes.number.isRequired
    //     }).isRequired
    // ).isRequired,
    // onCustomerComboChanged: PropTypes.func.isRequired,
    // onFromDateFieldChanged: PropTypes.func.isRequired,
    // onToDateFieldChanged: PropTypes.func.isRequired
    // onSearchButtonClick: PropTypes.func.isRequired
}

export default LoginDialog;
