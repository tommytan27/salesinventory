import React from 'react';
import { Button, DialogContainer, Switch } from 'react-md';
import { Form, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import dialogModes from '../../constants/dialogModes';
import styles from './../../constants/styles';
import { PropTypes } from 'prop-types';
import Dialog from './Dialog';

class ItemDialog extends Dialog {
    render() { 
        const item = this.props.itemInDialog;
        const barcodeFieldDisabled = this.props.dialogState.mode === dialogModes.EDIT_MODE ? 
                                    true : !this.props.dialogState.editable;
        
        if (this.props.suppliers.length === 0 || this.props.brands.length === 0) {
            let closeAction = [
                <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="closeButton">CLOSE</Button>,
            ];
            return (
                <DialogContainer id="ItemDialog" title="Error!"
                    visible={this.props.dialogState.open} dialogStyle={styles.dialog}
                    actions={closeAction} modal={false} initialFocus="#closeButton"
                    onHide={this.props.onDialogClose}>
                    <p style={styles.paragraph}>No supplier and brand records available to relate to an item. <br />
                    Please add a supplier and a brand first.</p>
                </DialogContainer>
            );
        }
        
        return (
            <DialogContainer id="ItemDialog" title={this.props.dialogState.title}
                visible={this.props.dialogState.open} dialogStyle={{width: '80%'}}
                actions={this.getDialogActions()} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                {this.renderDialogError(this.props.dialogState.error)}
                <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Supplier:</Col>
                    <Col sm={10}>
                        <Select name="SupplierSelect" value={item.supplierId}
                            disabled={!this.props.dialogState.editable}
                            onChange={(e) => {if (e) this.props.onSupplierComboChanged(e.value)}}
                            options={this.props.suppliers.map((supplier) => {
                                return {
                                    value: supplier.id,
                                    label: supplier.name
                                }
                            })} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Brand:</Col>
                    <Col sm={10}>
                        <Select name="BrandSelect" value={item.brandId}
                            disabled={!this.props.dialogState.editable}
                            onChange={(e) => {if (e) this.props.onBrandComboChanged(e.value)}}
                            options={this.props.brands.map((brand) => {
                                return {
                                    value: brand.id,
                                    label: brand.name
                                }
                            })} />
                    </Col>
                </FormGroup>
                <FormGroup validationState={item.barcode.state}>
                    <Col componentClass={ControlLabel} sm={2}>Barcode:</Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Barcode #"
                        value={item.barcode.value ? item.barcode.value : ""}
                        disabled={barcodeFieldDisabled}
                        onChange={ (e) => {this.props.onBarcodeFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup validationState={item.name.state}>
                    <Col componentClass={ControlLabel} sm={2}>Item Name:</Col>
                    <Col sm={10}>
                    <FormControl type="text" placeholder="Item Name"
                        value={item.name.value ? item.name.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onItemNameFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Vegan:</Col>
                    <Col sm={10}>
                    <Switch type="switch" label={item.vegan ? "Vegan" : "Vegetarian Only"}
                        id="veganFlag" name="veganFlag" checked={item.vegan}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onVeganFlagToggled()} } />
                    </Col>
                </FormGroup>
                <FormGroup validationState={item.price.state}>
                    <Col componentClass={ControlLabel} sm={2}>Price:</Col>
                    <Col sm={3}>
                    <FormControl type="text" placeholder="0.00"
                        value={item.price.value ? item.price.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onSellPriceFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup validationState={item.qty.state}>
                    <Col componentClass={ControlLabel} sm={2}>Qty:</Col>
                    <Col sm={2}>
                    <FormControl type="text" placeholder="0"
                        value={item.qty.value ? item.qty.value : ""}
                        disabled={!this.props.dialogState.editable}
                        onChange={ (e) => {this.props.onQtyFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                </Form>
            </DialogContainer>
        );
    }
}

ItemDialog.propTypes = {
    dialogState: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        mode: PropTypes.string,
        error: PropTypes.bool.isRequired,
        editable: PropTypes.bool.isRequired
    }).isRequired,
    itemInDialog: PropTypes.shape({
        barcode: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        barcode: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        supplierId: PropTypes.number,
        itemId: PropTypes.number,
        price: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        vegan: PropTypes.bool,
        qty: PropTypes.shape({
            value: PropTypes.number,
            state: PropTypes.string
        })
    }).isRequired,
    brands: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    suppliers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onItemNameFieldChange: PropTypes.func.isRequired,
    onBarcodeFieldChange: PropTypes.func.isRequired,
    onSellPriceFieldChange: PropTypes.func.isRequired,
    onQtyFieldChange: PropTypes.func.isRequired,
    onVeganFlagToggled: PropTypes.func.isRequired,
    onSupplierComboChanged: PropTypes.func.isRequired,
    onBrandComboChanged: PropTypes.func.isRequired,
    onAddButtonClick: PropTypes.func.isRequired,
    onSaveButtonClick: PropTypes.func.isRequired
}

export default ItemDialog;
