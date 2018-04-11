import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, FontIcon, Autocomplete } from 'react-md';
import styles from './../../constants/styles';

class PaymentDialog extends React.Component {
    renderPaymentOption() {
        if (this.props.paymentDialogs.payNow) {
            return;
        }

        let creditAvailable = (this.props.activeCustomer.id != 0);
        return (
            <center>
                {creditAvailable ? (
                    <button type="button" className="ShoppingSearchButton"
                    style={styles.iconButton.adminMenuButton}
                    title={"Credit - Pay Later"} onClick={this.props.onPayLaterButtonClick}>
                        <FontIcon primary style={styles.fontIcon.shoppingSearch}>credit_card</FontIcon>
                    </button>
                ) :
                (
                    <button type="button" className="ShoppingSearchButtonDisabled"
                    style={styles.iconButton.adminMenuButton} disabled title={"Credit - Pay Later"}>
                        <FontIcon primary style={styles.fontIcon.shoppingSearchDisabled}>credit_card</FontIcon>
                    </button> 
                )}           
                <button type="button" style={styles.iconButton.adminMenuButton} className="ShoppingSearchButton"
                    title={"Pay Now"} onClick={this.props.onPayNowButtonClick}>
                    <FontIcon primary style={styles.fontIcon.shoppingSearch}>attach_money</FontIcon>
                </button>
            </center>
        );
    }

    renderPaymentNow() {
        if (!this.props.paymentDialogs.payNow || this.props.paymentDialogs.change) {
            return;
        }

        return (
            <div>                
                <p style={styles.paragraph}>Enter the amount to pay:</p>
                <Autocomplete
                    id="paymentCash"
                    placeholder="Amount to pay" data={[]}
                    filter={Autocomplete.fuzzyFilter}
                    value={this.props.paymentDialogs.cash ? 
                        this.props.paymentDialogs.cash : ""}
                    onChange={ (e) => {this.props.onCashFieldChange(e)} }
                    onAutocomplete={ (e) => {this.props.onCashFieldChange(e)} }
                />
            </div>
        );
    }

    renderChangeInformation() {
        if (!this.props.paymentDialogs.payNow || !this.props.paymentDialogs.change) {
            return;
        }

        return (
            <center>
                <p style={styles.paymentDialog.paragraph}>Thank you for shopping with us</p>
                <p style={styles.paymentDialog.paragraph}>Please take your change</p>
                
                <div style={styles.paymentDialog.change}>${this.props.paymentDialogs.change.toFixed(2)}</div>
            </center>
        );
    }

    render() {         
        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="focusButton">CANCEL</Button>
        ];

        if (this.props.paymentDialogs.payNow) {
            if (this.props.paymentDialogs.change) {
                if (this.props.activeCustomer.id !== 0) {
                    actions = [                              
                        <Button flat onClick={this.props.onPayCashButtonClick}
                            style={styles.shoppingPageButton}>
                            SAVE AS CREDIT
                        </Button>,
                        <Button flat onClick={this.props.onPayCashButtonClick}
                            style={styles.shoppingPageButton} id="focusButton">
                            CHANGE TAKEN
                        </Button>
                    ];
                }
                else {
                    actions.push(
                        <Button flat onClick={this.props.onPayCashButtonClick}
                            style={styles.shoppingPageButton}>
                            CHANGE TAKEN
                        </Button>
                    );
                }
            }
            else {
                actions.push(
                    <Button flat iconChildren="attach_money" onClick={this.props.onPayCashButtonClick}
                        style={this.props.paymentDialogs.payable ? styles.shoppingPageButton : {}} 
                        disabled={!this.props.paymentDialogs.payable}>
                        PAY
                    </Button>
                );
            }
        }
        
        return (
            <DialogContainer id="PaymentDialog" title="Payment"
                visible={this.props.paymentDialogs.open} modal={true}
                dialogStyle={{width:"50%", height: this.props.paymentDialogs.payNow ? 
                    this.props.paymentDialogs.change ? "45%" : "27%" : "52%"}}
                actions={actions} initialFocus="#focusButton"
                onHide={this.props.onDialogClose}>
                {this.renderPaymentOption()}
                {this.renderPaymentNow()}
                {this.renderChangeInformation()}
            </DialogContainer>
        );
    }
}

PaymentDialog.propTypes = {
    paymentDialogs: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        payNow: PropTypes.bool.isRequired,
        total: PropTypes.number,
        cash: PropTypes.string,
        change: PropTypes.number,
        payable: PropTypes.bool.isRequired
    }).isRequired,
    activeCustomer: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    onPayNowButtonClick: PropTypes.func.isRequired,
    onCashFieldChange: PropTypes.func.isRequired,
    onPayCashButtonClick: PropTypes.func.isRequired
}

export default PaymentDialog;
