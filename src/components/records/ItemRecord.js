import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow, FontIcon } from 'react-md';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import styles from '../../constants/styles';

class ItemRecord extends React.Component {
    render() {
        return (
            <TableRow onClick={this.props.onClick}>
                <TableColumn>{this.props.barcode}</TableColumn>
                <TableColumn>{this.props.name}</TableColumn>
                <TableColumn>${this.props.price.toFixed(2)}</TableColumn>
                <TableColumn>{this.props.qty}</TableColumn>
                <TableColumn>
                    {this.props.vegan ? 
                        (<FontIcon style={styles.fontIcon.done}>done</FontIcon>) : 
                        (<FontIcon style={styles.fontIcon.clear}>clear</FontIcon>)}
                </TableColumn>
            </TableRow>
        );
    }
}

ItemRecord.propTypes = {
    barcode: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    supplierId: PropTypes.number.isRequired,
    brandId: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    vegan: PropTypes.bool.isRequired,
    qty: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ItemRecord;