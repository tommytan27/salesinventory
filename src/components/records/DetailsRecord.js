import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow, TableColumn } from 'react-md';

class DetailsRecord extends React.Component {
    render() {
        return (
            <TableRow>
                <TableColumn>{this.props.barcode}</TableColumn>
                <TableColumn>{this.props.itemName}</TableColumn>
                <TableColumn>{this.props.qty}</TableColumn>
                <TableColumn>${this.props.price.toFixed(2)}</TableColumn>
                <TableColumn>${(this.props.qty * this.props.price).toFixed(2)}</TableColumn>
            </TableRow>
        );
    }
}

DetailsRecord.propTypes = {
    barcode: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
};

export default DetailsRecord;