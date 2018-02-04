import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow } from 'react-md';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

class SupplierRecord extends React.Component {
    render() {
        return (
            <TableRow onClick={this.props.onClick}>
                <TableColumn>{this.props.id}</TableColumn>
                <TableColumn>{this.props.name}</TableColumn>
                <TableColumn>{this.props.contact}</TableColumn>
            </TableRow>
        );
    }
}

SupplierRecord.propTypes = {
    id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default SupplierRecord;