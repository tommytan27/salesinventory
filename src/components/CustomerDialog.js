import React from 'react';
import { Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import dialogModes from '../constants/dialogModes';
import styles from './../constants/styles';
import { PropTypes } from 'prop-types';

class CustomerDialog extends React.Component {
    getDialogActions = () => {
        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="cancelButton">CANCEL</Button>,
        ];
        if (this.props.dialogState.mode === dialogModes.ADD_MODE) {
            actions.push(
                <Button flat iconChildren="add" style={styles.flatButton.add}>ADD</Button>
            );
        }        
        else if (this.props.dialogState.mode === dialogModes.EDIT_MODE) {    
            if (!this.props.dialogState.editable) {
                actions.push(
                    <Button flat iconChildren="mode_edit" onClick={this.props.onEditButtonClick} style={styles.flatButton.edit}>EDIT</Button>
                );
            }
            else {
                actions.push(
                    <Button flat iconChildren="save" onClick={this.props.onEditButtonClick} style={styles.flatButton.save}>SAVE</Button>
                );
            }
            actions.push(
                <Button flat iconChildren="delete" style={styles.flatButton.delete}>DELETE</Button>
            );  
        }
        return actions;
    }

    render() { 
        const customer = this.props.customerInDialog;
        return (
            <DialogContainer id="CustomerDialog" title={this.props.dialogState.title}
                visible={this.props.dialogState.open} dialogStyle={styles.dialog}
                actions={this.getDialogActions()} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
            </DialogContainer>
        );
    }
}

CustomerDialog.propTypes = {
    // users: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         username: PropTypes.string.isRequired,
    //         timeout: PropTypes.number.isRequired
    //     }).isRequired
    // ).isRequired,
    // dialogState: PropTypes.shape({
    //     open: PropTypes.bool.isRequired,
    //     title: PropTypes.string.isRequired,
    //     mode: PropTypes.string.isRequired,
    //     editable: PropTypes.bool.isRequired
    // }).isRequired,
    // userInDialog: PropTypes.shape({
    //     id: PropTypes.number,
    //     username: PropTypes.shape({
    //         value: PropTypes.string,
    //         state: PropTypes.string
    //     }),
    //     timeout: PropTypes.shape({
    //         value: PropTypes.number,
    //         state: PropTypes.string
    //     }),
    //     password: PropTypes.shape({
    //         value: PropTypes.string,
    //         state: PropTypes.string
    //     }),
    //     confirmPassword: PropTypes.shape({
    //         value: PropTypes.string,
    //         state: PropTypes.string
    //     })
    // }).isRequired,
    // onDialogClose: PropTypes.func.isRequired,
    // onEditButtonClick: PropTypes.func.isRequired,
    // onUsernameFieldChange: PropTypes.func.isRequired,
    // onTimeoutFieldChange: PropTypes.func.isRequired,
    // onPasswordFieldChange: PropTypes.func.isRequired,
    // onConfirmPasswordFieldChange: PropTypes.func.isRequired
}

export default CustomerDialog;
