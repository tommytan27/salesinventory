import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, FontIcon } from 'react-md';
import styles from '../../constants/styles';

class StockingRecord extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.record.left}>
                    <Button icon style={styles.iconButton.removeRecord} onClick={this.props.onRemoveClick}>
                        remove_circle
                    </Button>
                    {this.props.selectedItem.name}&nbsp;
                    {this.props.selectedItem.vegan ? 
                        <FontIcon style={styles.fontIcon.veganIcon}>check_circle</FontIcon> :
                        <div></div>}
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

StockingRecord.propTypes = {
    selectedItem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        vegan: PropTypes.bool.isRequired
    }).isRequired,
    costPrice: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};

export default StockingRecord;