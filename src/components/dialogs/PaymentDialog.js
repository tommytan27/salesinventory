import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, FontIcon } from 'react-md';
import { Form, FormGroup, ControlLabel } from 'react-bootstrap';
import styles from './../../constants/styles';

class PaymentDialog extends React.Component {
    renderPaymentOption() {
        let creditAvailable = (this.props.activeCustomer.id != 0);
        return (
            <center>
                {creditAvailable ? (
                    <button type="button" className="ShoppingSearchButton"
                    style={styles.iconButton.adminMenuButton}
                    title={"Credit - Pay Later"} onClick={this.props.onUserRecordsButtonClick}>
                        <FontIcon primary style={styles.fontIcon.shoppingSearch}>credit_card</FontIcon>
                    </button>
                ) :
                (
                    <button type="button" className="ShoppingSearchButtonDisabled"
                    style={styles.iconButton.adminMenuButton} disabled
                    title={"Credit - Pay Later"} onClick={this.props.onUserRecordsButtonClick}>
                        <FontIcon primary style={styles.fontIcon.shoppingSearchDisabled}>credit_card</FontIcon>
                    </button> 
                )}           
                <button type="button" style={styles.iconButton.adminMenuButton} className="ShoppingSearchButton"
                    title={"Pay Now"} onClick={this.props.onUserRecordsButtonClick}>
                    <FontIcon primary style={styles.fontIcon.shoppingSearch}>attach_money</FontIcon>
                </button>
            </center>
        );
    }

    render() {         
        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="cancelButton">CANCEL</Button>
        ];
        
        return (
            <DialogContainer id="PaymentDialog" title="Payment"
                visible={this.props.paymentDialogs.open} dialogStyle={{width:"50%", height: "52%"}}
                actions={actions} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                {this.renderPaymentOption()}
            </DialogContainer>
        );
    }
}

PaymentDialog.propTypes = {
    // activeTab: PropTypes.string.isRequired,
    // searchDialogs: PropTypes.shape({
    //     open: PropTypes.bool.isRequired,
    //     fromDate: PropTypes.string,
    //     toDate: PropTypes.string,
    //     customerId: PropTypes.number
    // }).isRequired,
    // onDialogClose: PropTypes.func.isRequired,
    // customers: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         firstName: PropTypes.string.isRequired,
    //         lastName: PropTypes.string.isRequired,
    //         contact: PropTypes.string.isRequired,
    //         credit: PropTypes.number.isRequired
    //     }).isRequired
    // ).isRequired,
    // onCustomerComboChanged: PropTypes.func.isRequired,
    // onFromDateFieldChanged: PropTypes.func.isRequired,
    // onToDateFieldChanged: PropTypes.func.isRequired
    // // onSearchButtonClick: PropTypes.func.isRequired
}

export default PaymentDialog;
