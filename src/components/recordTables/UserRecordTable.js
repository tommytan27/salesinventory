import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import UserRecord from './../records/UserRecord';
import SystemUserDialog from '../../containers/systemDialogs/SystemUserDialog';
import styles from './../../constants/styles';

class UserRecordTable extends React.Component {
    render() {
        return (
            <div style={styles.page}>
                <h2>Users</h2>

                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Username</TableColumn>
                            <TableColumn>Timeout</TableColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.users.map((user) => (
                            <UserRecord key={user.id} {...user} onClick={() => this.props.onUserRecordClick(user)} />
                        ))}
                    </TableBody>
                </DataTable>
                
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.props.onAddUserClick}>
                    person_add
                </Button>

                <SystemUserDialog />
            </div>
        );
    }
}

UserRecordTable.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            timeout: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onAddUserClick: PropTypes.func.isRequired,
    onUserRecordClick: PropTypes.func.isRequired
};

export default UserRecordTable;