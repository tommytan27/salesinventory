import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, DatePicker } from 'react-md';
import { Form, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import Select from 'react-select';
import styles from './../../constants/styles';

class SelectCustomerDialog extends React.Component {
    render() {         
        let actions = [            
            <Button flat iconChildren="face" onClick={this.props.onDialogClose}>SELECT</Button>,
            <Button flat iconChildren="tag_faces" onClick={this.props.onShopAsAnonymousClick} id="anonymousButton">
                SHOP AS ANONYMOUS
            </Button>,            
            <Button flat iconChildren="keyboard_arrow_left" onClick={this.props.onBackButtonClick}>BACK</Button>
        ];
        
        return (
            <DialogContainer id="SelectCustomerDialog" title="Select Customer"
                visible={this.props.suppliers.length > 0 && this.props.brands.length > 0 && 
                    this.props.selectCustomerDialogs.open} 
                dialogStyle={{width: "30%", height: "70%"}} contentStyle={{height:"80%"}} stackedActions
                actions={actions} modal={false} initialFocus="#anonymousButton"
                onHide={this.props.onDialogClose}>
                <Select name="CustomerSelect" value={this.props.activeCustomer.id}
                    onChange={(e) => {if (e) this.props.onCustomerComboChanged(e.value)}}
                    options={this.props.customers.map((customer) => {
                        return {
                            value: customer.id,
                            label: customer.firstName + " " + customer.lastName
                        }
                    })} />
                <center>
                    <Button flat iconChildren="add"
                        style={styles.newCustomerButton} onClick={this.props.onNewCustomerClick}>
                        NEW CUSTOMER
                    </Button>
                </center>
            </DialogContainer>
        );
    }
}

SelectCustomerDialog.propTypes = {
    selectCustomerDialogs: PropTypes.shape({
        open: PropTypes.bool.isRequired
    }).isRequired,
    activeCustomer: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            contact: PropTypes.string,
            credit: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    suppliers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            contact: PropTypes.string
        }).isRequired
    ).isRequired,
    brands: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onBackButtonClick: PropTypes.func.isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onCustomerComboChanged: PropTypes.func.isRequired,
    onShopAsAnonymousClick: PropTypes.func.isRequired,
    onNewCustomerClick: PropTypes.func.isRequired
}

export default SelectCustomerDialog;
