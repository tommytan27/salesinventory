import React from 'react';
import { Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import dialogModes from '../../constants/dialogModes';
import styles from './../../constants/styles';
import { PropTypes } from 'prop-types';
import Dialog from './Dialog';

class BrandDialog extends Dialog {
    render() { 
        const brand = this.props.brandInDialog;
        return (
            <DialogContainer id="BrandDialog" title={this.props.dialogState.title}
                visible={this.props.dialogState.open} dialogStyle={styles.dialog} contentStyle={{maxHeight: "auto"}}
                actions={this.getDialogActions()} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                {this.renderDialogError(this.props.dialogState.error)}
                <FormGroup validationState={brand.name.state}>
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl type="text" placeholder="Name"
                        value={brand.name.value ? brand.name.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onBrandNameFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                </FormGroup>
            </DialogContainer>
        );
    }
}

BrandDialog.propTypes = {
    dialogState: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        mode: PropTypes.string,
        error: PropTypes.bool.isRequired,
        editable: PropTypes.bool.isRequired
    }).isRequired,
    brandInDialog: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        })
    }).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onBrandNameFieldChange: PropTypes.func.isRequired,
    onAddButtonClick: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired,
    onDeleteButtonClick: PropTypes.func.isRequired
}

export default BrandDialog;
