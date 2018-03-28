import React from 'react';
import { Button, FontIcon, Divider } from 'react-md';
import Select from 'react-select';
import StockingRecord from '../records/StockingRecord';
import styles from '../../constants/styles';

class StockInventoryPage extends React.Component {
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
        this.props.stockingRecords.forEach((record) => {
            total += (record.qty * record.costPrice);
        });
        return total;
    }

    render() {
        return (
            <div style={styles.page.right}>
                <div style={styles.itemCounter}>
                    <FontIcon style={styles.shoppingCart}>shopping_cart</FontIcon>&nbsp;
                    {this.props.stockingRecords.length} Items
                </div>
                <Divider />
                <div style={styles.recordsBox}>
                    {this.props.stockingRecords.map((record) => (
                        <StockingRecord key={record.id} selectedItem={this.getItem(record.barcode)} 
                            total={record.qty * record.costPrice} {...record}
                            onRemoveClick={() => {this.props.onRemoveClick(record.id)}} />
                    ))}
                </div>
                <Button flat primary swapTheming style={styles.completeButton}>
                    DONE ${this.getTotal().toFixed(2)}
                </Button>
            </div>
        );
    }
}

export default StockInventoryPage;