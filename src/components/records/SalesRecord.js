import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow } from 'react-md';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

class SalesRecord extends React.Component {
    getTotalPrice = (salesDetails) => {
        let total = 0;
        salesDetails.forEach(item => {
            total += item.qty * item.price;
        });
        return total.toFixed(2);
    }

    render() {
        return (
            <TableRow onClick={this.props.onClick}>
                <TableColumn>{this.props.id}</TableColumn>
                <TableColumn>{this.props.date}</TableColumn>
                <TableColumn>{this.props.customer}</TableColumn>
                <TableColumn>${this.getTotalPrice(this.props.salesDetails)}</TableColumn>
            </TableRow>
        );
    }
}

SalesRecord.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    salesDetails: PropTypes.arrayOf(
        PropTypes.shape({
            qty: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired
};

export default SalesRecord;