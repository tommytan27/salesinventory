import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow } from 'react-md';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

class CustomerRecord extends React.Component {
    render() {
        return (
            <TableRow onClick={this.props.onClick}>
                <TableColumn>{this.props.id}</TableColumn>
                <TableColumn>{this.props.firstName}</TableColumn>
                <TableColumn>{this.props.lastName}</TableColumn>
                <TableColumn>{this.props.contact}</TableColumn>
            </TableRow>
        );
    }
}

CustomerRecord.propTypes = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CustomerRecord;