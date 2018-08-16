import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, FontIcon, Autocomplete } from 'react-md';
import styles from './../../constants/styles';

class PaymentDialog extends React.Component {
    constructor(props) {
        super(props);
        this.resetConfirmationDialog = this.resetConfirmationDialog.bind(this);
        this.renderConfirmationDialog = this.renderConfirmationDialog.bind(this);
        this.state = {
            confirmationDialogOpen: false,
            confirmationAction: () => {},
            confirmationText: ""
        };
    }

    resetConfirmationDialog() {
        this.setState({
            confirmationDialogOpen: false,
            confirmationAction: () => {},
            confirmationText: ""
        });
    }

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
                    title={"Credit - Pay Later"} onClick={this.handlePayLater}>
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

    renderConfirmationDialog() {
        if (this.state.confirmationDialogOpen) {
            let actions = [
                <Button flat iconChildren="clear" onClick={() => {this.resetConfirmationDialog()}} 
                    id="focusButton">NO</Button>,
                <Button flat iconChildren="check" onClick={this.state.confirmationAction}>YES</Button>
            ];
            return (                        
                <DialogContainer id="ConfirmationDialog" title="Confirmation" modal={true}
                    portal={true} lastChild={true} disableScrollLocking={true} renderNode={document.body}
                    actions={actions} initialFocus="#focusButton" visible={this.state.confirmationDialogOpen}>
                    <p style={styles.paragraph}>{this.state.confirmationText}</p>
                </DialogContainer>
            );
        }
        return;
    }

    handleChangeTaken = () => {
        this.setState({
            confirmationDialogOpen: true,
            confirmationAction: () => {
                this.props.onChangeTakenClick();
                this.resetConfirmationDialog();
            },
            confirmationText: "Are you sure you have taken your change?"
        });
    }

    handleSaveAsCredit = () => {
        this.setState({
            confirmationDialogOpen: true,
            confirmationAction: () => {
                this.props.onSaveAsCreditClick(this.props.paymentDialogs.change);
                this.resetConfirmationDialog();
            },
            confirmationText: "Are you sure to save the change as your credit?"
        });
    }

    handlePayLater = () => {
        this.setState({
            confirmationDialogOpen: true,
            confirmationAction: () => {
                this.props.onPayLaterButtonClick();
                this.resetConfirmationDialog();
            },
            confirmationText: "Are you sure you want to pay later?"
        });
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
                            style={styles.shoppingPageButton}
                            onClick={this.handleSaveAsCredit}>
                            SAVE AS CREDIT
                        </Button>,
                        <Button flat onClick={this.props.onPayCashButtonClick}
                            style={styles.shoppingPageButton} id="focusButton"
                            onClick={this.handleChangeTaken}>
                            CHANGE TAKEN
                        </Button>
                    ];
                }
                else {
                    actions.push(
                        <Button flat onClick={this.props.onPayCashButtonClick}
                            style={styles.shoppingPageButton}
                            onClick={this.handleChangeTaken}>
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
                dialogStyle={{width:"50%"}} contentStyle={{maxHeight: "auto"}}
                actions={actions} initialFocus="#focusButton"
                onHide={this.props.onDialogClose}>
                {this.renderPaymentOption()}
                {this.renderPaymentNow()}
                {this.renderChangeInformation()}
                {this.renderConfirmationDialog()}
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
    onPayCashButtonClick: PropTypes.func.isRequired,
    onChangeTakenClick: PropTypes.func.isRequired,
    onPayLaterButtonClick: PropTypes.func.isRequired,
    onSaveAsCreditClick: PropTypes.func.isRequired
}

export default PaymentDialog;
