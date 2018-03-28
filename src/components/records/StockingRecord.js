import React from 'react';
import { Button } from 'react-md';
import styles from '../../constants/styles';

class StockingRecord extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.record.left}>
                    <Button icon style={styles.removeRecord}>remove_circle</Button>
                    {this.props.selectedItem.name}
                </div>                        
                <div style={styles.record.right}>${this.props.total.toFixed(2)}</div>
                <br />
                <div style={styles.record.secondLeft}>
                    {this.props.qty} x @ ${this.props.costPrice.toFixed(2)}
                </div>
            </div>
        );
    }
}

export default StockingRecord;