import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, Button, DialogContainer } from 'react-md';
import UserRecord from './UserRecord';
import styles from './../constants/styles';

class UserRecordTable extends React.Component {
    constructor(props) {
        super(props);
    }

    renderEditUserDialog = (selectedUserID) => {
        if (this.props.selectedUser !== 0) {
            let selectedUser = this.props.users.find((user) => {
                return user.id === selectedUserID
            });
            const actions = [
                <Button flat iconChildren="clear" onClick={this.props.onEditDialogClose}>CANCEL</Button>,
                <Button flat iconChildren="mode_edit">EDIT</Button>,
                <Button flat iconChildren="delete">DELETE</Button>
            ]
            return (
                <DialogContainer visible={this.props.editDialogState} 
                actions={actions} modal={false} onHide={this.props.onEditDialogClose}>
                    HELLO {selectedUser.username}!!!
                </DialogContainer>
            );
        }
        return;
    }

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
                            <UserRecord key={user.id} {...user} onClick={() => this.props.onUserRecordClick(user.id)} />
                        ))}
                    </TableBody>
                </DataTable>
                
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right}>person_add</Button>
                {this.renderEditUserDialog(this.props.selectedUser)}
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
    selectedUser: PropTypes.number.isRequired,
    editDialogState: PropTypes.bool.isRequired,
    onEditDialogClose: PropTypes.func.isRequired,
    onUserRecordClick: PropTypes.func.isRequired
};

export default UserRecordTable;