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

    renderCreditField = (customer) => {
        if (this.props.dialogState.mode === dialogModes.EDIT_MODE) {
            return (
                <FormGroup>     
                    <ControlLabel>Credit:</ControlLabel>
                    <FormControl type="text" placeholder="Credit" disabled={true}
                        value={customer.credit ? customer.credit : "0.00"} />
                </FormGroup>
            );
        }
        return;
    }

    render() { 
        const customer = this.props.customerInDialog;
        return (
            <DialogContainer id="CustomerDialog" title={this.props.dialogState.title}
                visible={this.props.dialogState.open} dialogStyle={styles.dialog}
                actions={this.getDialogActions()} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                <FormGroup validationState={customer.firstName.state}>
                    <ControlLabel>Fist Name:</ControlLabel>
                    <FormControl type="text" placeholder="First Name"
                        value={customer.firstName.value ? customer.firstName.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onFirstNameFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup validationState={customer.lastName.state}>
                    <ControlLabel>Last Name:</ControlLabel>
                    <FormControl type="text" placeholder="Last Name"
                        value={customer.lastName.value ? customer.lastName.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onLastNameFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup validationState={customer.contact.state}>
                    <ControlLabel>Contact:</ControlLabel>
                    <FormControl type="text" placeholder="Contact"
                        value={customer.contact.value ? customer.contact.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onContactFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
                {this.renderCreditField(customer)}
            </DialogContainer>
        );
    }
}

CustomerDialog.propTypes = {
    dialogState: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        mode: PropTypes.string,
        editable: PropTypes.bool.isRequired
    }).isRequired,
    customerInDialog: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        lastName: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        contact: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        credit: PropTypes.number
    }).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onFirstNameFieldChange: PropTypes.func.isRequired,
    onLastNameFieldChange: PropTypes.func.isRequired,
    onContactFieldChange: PropTypes.func.isRequired
}

export default CustomerDialog;
