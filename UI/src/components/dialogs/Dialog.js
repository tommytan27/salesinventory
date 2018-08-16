import React from 'react';
import { Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Alert } from 'react-bootstrap';
import dialogModes from '../../constants/dialogModes';
import styles from './../../constants/styles';
import { PropTypes } from 'prop-types';

class Dialog extends React.Component {    
    getDialogActions = () => {
        let deleteButtonDisabled = this.props.users && this.props.userInDialog && this.props.activeAdmin ?
            this.props.users.length <= 1 || this.props.userInDialog.id === this.props.activeAdmin.username :
            this.props.items && this.props.supplierInDialog ?
                this.props.items.filter((item) => { return item.supplierId === this.props.supplierInDialog.id; }).length > 0 :
                this.props.items && this.props.brandInDialog ?
                    this.props.items.filter((item) => { return item.brandId === this.props.brandInDialog.id; }).length > 0 :
                    false;

        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="cancelButton">CANCEL</Button>,
        ];
        if (this.props.dialogState.mode === dialogModes.ADD_MODE) {
            actions.push(
                <Button flat iconChildren="add" onClick={this.props.onAddButtonClick} style={styles.flatButton.add}>ADD</Button>
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
                    <Button flat iconChildren="save" onClick={this.props.onSaveButtonClick} style={styles.flatButton.save}>SAVE</Button>
                );
            }
            actions.push(
                <Button flat iconChildren="delete" style={deleteButtonDisabled ? styles.flatButton.deleteDisabled : styles.flatButton.delete}
                    disabled={deleteButtonDisabled} onClick={this.props.onDeleteButtonClick}>DELETE</Button>
            );  
        }
        return actions;
    }
    renderDialogError = (dialogState) => {
        if (dialogState) {
            return (
                <Alert bsStyle="danger">
                    <strong>Error: </strong>Please resolve the errors in the fields below.
                </Alert>
            );
        }
        return;
    }
}

Dialog.propTypes = {
    onDialogClose: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onAddButtonClick: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired
}

export default Dialog;
