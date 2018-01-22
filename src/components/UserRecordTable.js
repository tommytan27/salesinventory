import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import UserRecord from './UserRecord';
import styles from './../constants/styles';

class UserRecordTable extends React.Component {
    renderEditUserDialog = (selectedUserID) => {
        if (this.props.editDialogState) {
            let selectedUser = this.props.users.find((user) => {
                return user.id === selectedUserID
            });
            const actions = [
                <Button flat iconChildren="clear" onClick={this.props.onEditDialogClose} id="editUserCancel">CANCEL</Button>,
                <Button flat iconChildren="mode_edit" style={styles.flatButton.edit}>EDIT</Button>,
                <Button flat iconChildren="delete" style={styles.flatButton.delete}>DELETE</Button>
            ]
            return (
                <DialogContainer id="editUser" title="Edit User" visible={this.props.editDialogState} dialogStyle={styles.dialog.medium}
                actions={actions} modal={false} onHide={this.props.onEditDialogClose} initialFocus="#editUserCancel">
                    <FormGroup validationState="success">
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl type="text" placeholder="Username" value={selectedUser.username} />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState="success">     
                        <ControlLabel>Timeout (minutes):</ControlLabel>
                        <FormControl type="text" placeholder="0" value={selectedUser.timeout} validationState="success" />
                        <FormControl.Feedback />
                    </FormGroup>
                </DialogContainer>
            );
        }
        return;
    }

    renderAddUserDialog = () => {
        if (this.props.addDialogState) {
            const actions = [
                <Button flat iconChildren="clear" onClick={this.props.onAddDialogClose} id="addUserCancel">CANCEL</Button>,
                <Button flat iconChildren="add" style={styles.flatButton.add}>ADD</Button>
            ]
            return (
                <DialogContainer id="addUser" title="Add User" visible={true} dialogStyle={styles.dialog.medium}
                actions={actions} modal={false} onHide={this.props.onAddDialogClose} initialFocus="#addUserCancel">
                    <FormGroup validationState="">
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl type="text" placeholder="Username" />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState="">     
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl type="password" placeholder="Password" validationState="success" />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState="">     
                        <ControlLabel>Confirm Password:</ControlLabel>
                        <FormControl type="password" placeholder="Confirm Password" validationState="success" />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState="">     
                        <ControlLabel>Timeout (minutes):</ControlLabel>
                        <FormControl type="text" placeholder="0" validationState="success" />
                        <FormControl.Feedback />
                    </FormGroup>
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
                <Button floating primary style={styles.floatingButton.right} onClick={this.props.onAddUserClick}>
                    person_add
                </Button>
                
                {this.renderEditUserDialog(this.props.selectedUser)}
                {this.renderAddUserDialog()}
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
    addDialogState: PropTypes.bool.isRequired,
    editDialogState: PropTypes.bool.isRequired,
    onAddUserClick: PropTypes.func.isRequired,
    onUserRecordClick: PropTypes.func.isRequired,
    onAddDialogClose: PropTypes.func.isRequired,
    onEditDialogClose: PropTypes.func.isRequired
};

export default UserRecordTable;