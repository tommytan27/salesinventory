import React from 'react';
import { PropTypes } from 'prop-types';
import { Image, Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Paper, Button } from 'react-md';
import Select from 'react-select';
import styles from '../../constants/styles';

const enterKey = 13;

class StockInventoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleBarcodeButton = this.handleBarcodeButton.bind(this);
    }

    componentDidUpdate(){
        if (this.props.itemSelectionForm.autoAdd) {
            this.props.onAddToListClick(this.props.itemSelectionForm.selectedItem);
        }
    }

    handleBarcodeButton = () => {
        this.barcodeField.focus();
        this.props.onBarcodeButtonClick();
    }

    render() {
        let selectedItem = this.props.itemSelectionForm.selectedItem;
        return (
            <div style={styles.page.left}>
                <Image src="logo.png" style={styles.logo} />
                <Paper key="stockInventoryPaper" zDepth={3} style={styles.paperLeftPart}>
                <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Barcode:</Col>
                    <Col sm={8}>
                    <FormControl type="text" placeholder="Barcode #"
                        inputRef={(barcodeFld) => { this.barcodeField = barcodeFld; }} 
                        disabled={!this.props.itemSelectionForm.barcodeEditable}
                        value={this.props.itemSelectionForm.barcodeField ? 
                            this.props.itemSelectionForm.barcodeField : ""}
                        onChange={ (e) => {this.props.onBarcodeFieldChange(e.target.value)} }
                        onKeyUp={ (e) => {
                            var key = e.which || e.keyCode;
                            if (key === enterKey) {
                                this.props.onBarcodeFieldEnterKey(e.target.value, this.props.allItems);
                            }
                        }} />
                    </Col>
                    <Col sm={2} style={styles.barcodeButton}>
                        <Button icon onClick={this.handleBarcodeButton}>
                            select_all
                        </Button>
                        <Button icon onClick={() => {
                            this.props.onItemComboChanged(
                                this.props.itemSelectionForm.barcodeField,
                                this.props.allItems
                            )
                        }}>
                            search
                        </Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Supplier:</Col>
                    <Col sm={10}>
                        <Select name="SupplierSelect" 
                            value={selectedItem.supplierId}
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
                        <Select name="BrandSelect" 
                            value={selectedItem.brandId}
                            onChange={(e) => {if (e) this.props.onBrandComboChanged(e.value)}}
                            options={this.props.brands.map((brand) => {
                                return {
                                    value: brand.id,
                                    label: brand.name
                                }
                            })} />
                    </Col>
                </FormGroup>                    
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Item:</Col>
                    <Col sm={10}>
                        <Select name="ItemSelect" 
                            value={selectedItem.barcode}
                            onChange={(e) => {if (e) this.props.onItemComboChanged(e.value, this.props.items)}}
                            options={this.props.items.map((item) => {
                                return {
                                    value: item.barcode,
                                    label: item.name
                                }
                            })} />
                    </Col>
                </FormGroup>
                <FormGroup validationState={selectedItem.sellPrice.state}>
                    <Col componentClass={ControlLabel} sm={2}>Sell Price:</Col>
                    <Col sm={3}>
                    <FormControl type="text" placeholder="0.00"
                        value={selectedItem.sellPrice.value ? selectedItem.sellPrice.value : ""}
                        onChange={ (e) => {this.props.onSellPriceFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup validationState={selectedItem.costPrice.state}>
                    <Col componentClass={ControlLabel} sm={2}>Cost Price:</Col>
                    <Col sm={3}>
                    <FormControl type="text" placeholder="0.00"
                        value={selectedItem.costPrice.value ? selectedItem.costPrice.value : ""}
                        onChange={ (e) => {this.props.onCostPriceFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup validationState={selectedItem.qty.state}>
                    <Col componentClass={ControlLabel} sm={2}>Qty:</Col>
                    <Col sm={2}>
                    <FormControl type="text" placeholder="0"
                        value={selectedItem.qty.value ? selectedItem.qty.value : ""}
                        onChange={ (e) => {this.props.onQtyFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Sub Total:</Col>
                    <Col style={styles.valueLabel} sm={9}>
                        ${(selectedItem.qty.value * selectedItem.costPrice.value).toFixed(2)}
                    </Col>
                    <Col sm={1}><Button floating primary
                        disabled={!this.props.itemSelectionForm.addableItem}
                        onClick={ () => {this.props.onAddToListClick(selectedItem)} }>
                        shopping_basket
                    </Button></Col>
                </FormGroup>
                </Form>
                </Paper>

                <Button flat primary iconChildren="keyboard_arrow_left" swapTheming
                    style={styles.floatingButton.left}>
                    BACK
                </Button>
            </div>
        );
    }
}

StockInventoryForm.propTypes = {
    suppliers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    brands: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    allItems: PropTypes.arrayOf(
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
    ),
    itemSelectionForm: PropTypes.shape({
        barcodeEditable: PropTypes.bool.isRequired,
        barcodeField: PropTypes.string,
        addableItem: PropTypes.bool,
        selectedItem: PropTypes.shape({
            supplierId: PropTypes.number.isRequired,
            brandId: PropTypes.number.isRequired,
            barcode: PropTypes.string,
            sellPrice: PropTypes.shape({
                value: PropTypes.string,
                state: PropTypes.string
            }).isRequired,
            costPrice: PropTypes.shape({
                value: PropTypes.string,
                state: PropTypes.string
            }).isRequired,
            qty: PropTypes.shape({
                value: PropTypes.number,
                state: PropTypes.string
            }).isRequired
        }).isRequired
    }).isRequired,
    onSupplierComboChanged: PropTypes.func.isRequired,
    onBrandComboChanged: PropTypes.func.isRequired,
    onItemComboChanged: PropTypes.func.isRequired,
    onSellPriceFieldChange: PropTypes.func.isRequired,
    onCostPriceFieldChange: PropTypes.func.isRequired,
    onQtyFieldChange: PropTypes.func.isRequired,
    onBarcodeFieldChange: PropTypes.func.isRequired,
    onBarcodeFieldEnterKey: PropTypes.func.isRequired,
    onAddToListClick: PropTypes.func.isRequired,
    onBarcodeButtonClick: PropTypes.func.isRequired
};

export default StockInventoryForm;