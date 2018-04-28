import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, FontIcon, Divider, DialogContainer } from 'react-md';
import Select from 'react-select';
import StockingRecord from '../records/StockingRecord';
import styles from '../../constants/styles';

class ShoppingRecordsList extends React.Component {
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
    
    getItem = (barcode) => {
        if (this.props.items && this.props.items.length > 0) {
            let foundItem = this.props.items.find((item) => {
                return item.barcode === barcode;
            });
            return foundItem;
        }
        return null;
    }

    getTotal = () => {
        let total = 0;
        this.props.stockShopRecords.forEach((record) => {
            total += (record.qty * record.costPrice);
        });
        return total;
    }

    componentDidUpdate() {
        this.recordListBox.scrollTop = this.recordListBox.scrollHeight - this.recordListBox.clientHeight;
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

    handleDone = () => {
        this.setState({
            confirmationDialogOpen: true,
            confirmationAction: () => {
                this.props.onDoneButtonClick();
                this.resetConfirmationDialog();
            },
            confirmationText: "Are you sure you want to finalize this stocking records?"
        });
    }

    render() {
        let total = this.getTotal();
        let totalDisabled = (total <= 0);
        return (
            <div style={styles.page.right}>
                <div style={styles.itemCounter}>
                    <FontIcon style={styles.shoppingCart}>shopping_cart</FontIcon>&nbsp;
                    {this.props.stockShopRecords.length} Items
                </div>
                <Divider />
                <div style={styles.recordsBox} ref={(recordBox) => { this.recordListBox = recordBox; }}>
                    {this.props.stockShopRecords.map((record) => (
                        <StockingRecord key={record.id} selectedItem={this.getItem(record.barcode)} 
                            total={record.qty * record.costPrice} {...record}
                            onRemoveClick={() => {this.props.onRemoveClick(record.id)}} />
                    ))}
                </div>
                <Button flat primary swapTheming disabled={totalDisabled} onClick={this.handleDone}
                    style={totalDisabled ? styles.completeButton.disabled : styles.completeButton.enabled}>
                    DONE ${total.toFixed(2)}
                </Button>
                {this.renderConfirmationDialog()}
            </div>
        );
    }
}

ShoppingRecordsList.propTypes = {
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
    stockShopRecords: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            barcode: PropTypes.string.isRequired,
            sellPrice: PropTypes.number.isRequired,
            costPrice: PropTypes.number.isRequired,
            qty: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onRemoveClick: PropTypes.func.isRequired
};

export default ShoppingRecordsList;