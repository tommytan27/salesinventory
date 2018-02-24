import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow } from 'react-md';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

class SalesDetailsRecord extends React.Component {
    render() {
        return (
            <TableRow onClick={this.props.onClick}>
                <TableColumn>{this.props.barcode}</TableColumn>
                <TableColumn>{this.props.itemName}</TableColumn>
                <TableColumn>{this.props.qty}</TableColumn>
                <TableColumn>{this.props.price}</TableColumn>
                <TableColumn>{this.props.qty * this.props.price}</TableColumn>
            </TableRow>
        );
    }
}

SalesDetailsRecord.propTypes = {
    barcode: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
};

export default SalesDetailsRecord;