import React from 'react';
import { PropTypes } from 'prop-types';
import { Form, Col, FormGroup } from 'react-bootstrap';
import { Button, DialogContainer, FontIcon, Autocomplete } from 'react-md';
import styles from './../../constants/styles';

const enterKey = 13;

class PriceCheckDialog extends React.Component {
    handleBarcodeButton = () => {
        let barcodeField = document.getElementsByClassName("itemBarcodeField").item(0);
        barcodeField.focus();
        this.props.onBarcodeButtonClick();
    }

    renderVeganIcon = (vegan) => {
        if (vegan) {
            return ( 
                <FontIcon style={styles.fontIcon.veganIcon}>check_circle</FontIcon>
            );
        }
        return;
    }

    render() {
        let selectedItem = this.props.priceCheckDialogs.selectedItem;

        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="focusButton">CANCEL</Button>
        ];        
        return (
            <DialogContainer id="PriceCheckDialog" title="Price Check"
                visible={this.props.priceCheckDialogs.open}
                dialogStyle={{width:"50%"}} contentStyle={{maxHeight: "auto"}}
                actions={actions} modal={false} initialFocus="#focusButton"
                onHide={this.props.onDialogClose}>
                <p style={styles.paragraph}>Scan the item to check the price:</p>
                <Form horizontal>
                <FormGroup>
                    <Col sm={1} style={styles.iconButton.barcodeButton}>
                        <Button icon onClick={this.handleBarcodeButton}>
                            select_all
                        </Button>
                    </Col>
                    <Col sm={10}>
                        <Autocomplete
                            id="itemBarcode"
                            placeholder="Item Barcode"
                            data={[]}
                            focusInputOnAutocomplete
                            filter={Autocomplete.caseInsensitiveFilter}
                            value={this.props.priceCheckDialogs.barcode ? 
                                this.props.priceCheckDialogs.barcode : ""}
                            onChange={ (e) => {this.props.onBarcodeFieldChange(e)} }
                            onAutocomplete={ (e) => {this.props.onBarcodeFieldChange(e)} }
                            onKeyDown={ (e) => {
                                var key = e.which || e.keyCode;
                                if (key === enterKey) {
                                    e.preventDefault();
                                    this.props.onBarcodeFieldEnterKey(e.target.value, this.props.items);
                                }
                            }} 
                            inputClassName="itemBarcodeField"
                        />
                    </Col>
                </FormGroup>
                </Form>
                <br />
                <center>
                <p style={styles.paymentDialog.paragraph}>
                    {selectedItem.name ? selectedItem.name : "Unknown"}
                    &nbsp;
                    {this.renderVeganIcon(selectedItem.vegan)}
                </p>
                <div style={styles.paymentDialog.change}>
                    ${selectedItem.price ? selectedItem.price.toFixed(2) : "0.00"}
                </div>
                </center>
            </DialogContainer>
        );
    }
}

PriceCheckDialog.propTypes = {
    priceCheckDialogs: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        barcode: PropTypes.string,
        selectedItem: PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
            vegan: PropTypes.bool
        }).isRequired
    }).isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            barcode: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            supplierId: PropTypes.number.isRequired,
            brandId: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            vegan: PropTypes.bool.isRequired,
            qty: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onBarcodeFieldChange: PropTypes.func.isRequired,
    onBarcodeButtonClick: PropTypes.func.isRequired,
    onBarcodeFieldEnterKey: PropTypes.func.isRequired
}

export default PriceCheckDialog;
