import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, FontIcon, Divider } from 'react-md';
import Select from 'react-select';
import ShoppingRecord from '../records/ShoppingRecord';
import styles from '../../constants/styles';
import activeCustomer from './../../reducers/activeCustomer';

class StockingRecordsList extends React.Component {
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
            total += (record.qty * record.sellPrice);
        });
        if (!this.props.selectCustomerDialogs.open && this.props.activeCustomer.id !== 0) {
            total -= this.props.activeCustomer.credit;
        }
        return total;
    }

    renderCustomerCredit = () => {
        if (!this.props.selectCustomerDialogs.open && this.props.activeCustomer.id !== 0) {
            return (
                <div>
                <div style={styles.record.left}>
                    <div style={styles.fontIcon.customerCreditContainer}>
                    <FontIcon style={styles.fontIcon.customerCredit}>
                        monetization_on
                    </FontIcon>
                    </div>
                    Customer Credit
                </div>                        
                <div style={styles.record.right}>-${this.props.activeCustomer.credit.toFixed(2)}</div>
            </div>
            );
        }
        return;
    }

    componentDidUpdate() {
        this.recordListBox.scrollTop = this.recordListBox.scrollHeight - this.recordListBox.clientHeight;
    }

    render() {
        let total = this.getTotal();
        let totalDisabled = (total <= 0);
        return (
            <div style={styles.page.rightShopping}>
                <div style={styles.itemCounter}>
                    <FontIcon style={styles.shoppingCart}>shopping_cart</FontIcon>&nbsp;
                    {this.props.stockShopRecords.length} Items
                </div>
                <Divider />
                <div style={styles.recordsBox} ref={(recordBox) => { this.recordListBox = recordBox; }}>
                    {this.props.stockShopRecords.map((record) => (
                        <ShoppingRecord key={record.id} selectedItem={this.getItem(record.barcode)} 
                            total={record.qty * record.sellPrice} {...record}
                            onRemoveClick={() => {this.props.onRemoveClick(record.id)}} />
                    ))}
                    {this.renderCustomerCredit()}
                </div>
                <Button flat disabled={totalDisabled}
                    style={totalDisabled ? styles.payButton.disabled : styles.payButton.enabled}>
                    PAY ${total.toFixed(2)}
                </Button>
            </div>
        );
    }
}

StockingRecordsList.propTypes = {
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
    activeCustomer: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired
    }).isRequired,
    onRemoveClick: PropTypes.func.isRequired
};

export default StockingRecordsList;