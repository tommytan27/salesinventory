import React from 'react';
import { Image, Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Paper, Button } from 'react-md';
import Select from 'react-select';
import styles from '../../constants/styles';

class StockInventoryForm extends React.Component {
    render() {
        return (
            <div style={styles.page.left}>
                <Image src="logo.png" style={styles.logo} />
                <Paper key="stockInventoryPaper" zDepth={3} style={styles.paperLeftPart}>
                <Form horizontal>
                <FormGroup validationState="success">
                    <Col componentClass={ControlLabel} sm={2}>Barcode:</Col>
                    <Col sm={8}>
                    <FormControl type="text" placeholder="Barcode #"
                        // value={item.barcode.value ? item.barcode.value : ""}
                        />
                    <FormControl.Feedback />
                    </Col>
                    <Col sm={2} style={styles.barcodeButton}>
                        <Button icon>select_all</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Supplier:</Col>
                    <Col sm={10}>
                        <Select name="SupplierSelect" value={1}
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
                        <Select name="BrandSelect" value={1}
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
                        <Select name="ItemSelect" value={"1153135151"}
                            onChange={(e) => {if (e) this.props.onItemComboChanged(e.value)}}
                            options={this.props.items.map((item) => {
                                return {
                                    value: item.barcode,
                                    label: item.name
                                }
                            })} />
                    </Col>
                </FormGroup>
                <FormGroup validationState="success">
                    <Col componentClass={ControlLabel} sm={2}>Sell Price:</Col>
                    <Col sm={3}>
                    <FormControl type="text" placeholder="0.00"
                        // value={item.price.value ? item.price.value : ""}
                        onChange={ (e) => {this.props.onSellPriceFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup validationState="success">
                    <Col componentClass={ControlLabel} sm={2}>Cost Price:</Col>
                    <Col sm={3}>
                    <FormControl type="text" placeholder="0.00"
                        // value={item.price.value ? item.price.value : ""}
                        onChange={ (e) => {this.props.onCostPriceFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup validationState="success">
                    <Col componentClass={ControlLabel} sm={2}>Qty:</Col>
                    <Col sm={2}>
                    <FormControl type="text" placeholder="0"
                        // value={item.qty.value ? item.qty.value : ""}
                        onChange={ (e) => {this.props.onQtyFieldChange(e.target.value)} } />
                    <FormControl.Feedback />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>Sub Total:</Col>
                    <Col style={styles.valueLabel} sm={9}>$0.00</Col>
                    <Col sm={1}><Button floating primary>shopping_basket</Button></Col>
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

export default StockInventoryForm;