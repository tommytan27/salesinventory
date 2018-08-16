import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow, TableColumn } from 'react-md';

class DetailsRecord extends React.Component {
    getCostColumn = (props) => {
        if(props.costPrice) {
            return (<TableColumn>${props.costPrice.toFixed(2)}</TableColumn>);
        }
        return;
    }

    getSubTotalColumn = (props) => {
        if(props.costPrice) {
            return (<TableColumn>${(props.qty * props.costPrice).toFixed(2)}</TableColumn>);
        }
        return (<TableColumn>${(props.qty * props.price).toFixed(2)}</TableColumn>);
    }

    render() {
        return (
            <TableRow>
                <TableColumn>{this.props.barcode}</TableColumn>
                <TableColumn>{this.props.itemName}</TableColumn>
                <TableColumn>{this.props.qty}</TableColumn>
                <TableColumn>${this.props.price.toFixed(2)}</TableColumn>
                {this.getCostColumn(this.props)}
                {this.getSubTotalColumn(this.props)}
            </TableRow>
        );
    }
}

DetailsRecord.propTypes = {
    barcode: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    costPrice: PropTypes.number
};

export default DetailsRecord;