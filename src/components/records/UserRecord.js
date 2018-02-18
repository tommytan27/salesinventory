import React from 'react';
import { PropTypes } from 'prop-types';
import { TableRow } from 'react-md';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

class UserRecord extends React.Component {
    render() {
        return (
            <TableRow onClick={this.props.onClick}>
                <TableColumn>{this.props.id}</TableColumn>
                <TableColumn>{this.props.username}</TableColumn>
                <TableColumn>{this.props.timeout}</TableColumn>
            </TableRow>
        );
    }
}

UserRecord.propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default UserRecord;