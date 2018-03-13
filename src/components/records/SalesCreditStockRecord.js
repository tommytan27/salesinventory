import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow } from 'react-md';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

class SalesCreditStockRecord extends React.Component {
    getTotalPrice = (details) => {
        let total = 0;
        details.forEach(item => {
            total += item.qty * item.price;
        });
        return total.toFixed(2);
    }

    render() {
        return (
            <TableRow onClick={this.props.onClick}>
                <TableColumn>{this.props.id}</TableColumn>
                <TableColumn>{this.props.date}</TableColumn>
                {this.props.customer 
                    ? (<TableColumn>{this.props.customer}</TableColumn>)
                    : (<div></div>)}
                <TableColumn>${this.getTotalPrice(this.props.details)}</TableColumn>
            </TableRow>
        );
    }
}

SalesCreditStockRecord.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
        PropTypes.shape({
            qty: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired
};

export default SalesCreditStockRecord;