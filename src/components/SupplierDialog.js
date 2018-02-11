import React from 'react';
import { Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import dialogModes from '../constants/dialogModes';
import styles from './../constants/styles';
import { PropTypes } from 'prop-types';
import Dialog from './Dialog';

class SupplierDialog extends Dialog {
    render() { 
        const supplier = this.props.supplierInDialog;
        const nameFieldDisabled = this.props.dialogState.mode === dialogModes.ADD_MODE ? false : true;
        return (
            <DialogContainer id="SupplierDialog" title={this.props.dialogState.title}
                visible={this.props.dialogState.open} dialogStyle={styles.dialog}
                actions={this.getDialogActions()} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                {this.renderDialogError(this.props.dialogState.error)}
                <FormGroup validationState={supplier.name.state}>
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl type="text" placeholder="Name"
                        value={supplier.name.value ? supplier.name.value : ""}
                        disabled={nameFieldDisabled}
                        onChange={ (e) => {this.props.onSupplierNameFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup validationState={supplier.contact.state}>
                    <ControlLabel>Contact:</ControlLabel>
                    <FormControl type="text" placeholder="Contact"
                        value={supplier.contact.value ? supplier.contact.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onContactFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
            </DialogContainer>
        );
    }
}

SupplierDialog.propTypes = {
    dialogState: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        mode: PropTypes.string,
        error: PropTypes.bool.isRequired,
        editable: PropTypes.bool.isRequired
    }).isRequired,
    supplierInDialog: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        contact: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        })
    }).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onSupplierNameFieldChange: PropTypes.func.isRequired,
    onContactFieldChange: PropTypes.func.isRequired,
    onAddButtonClick: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired
}

export default SupplierDialog;
