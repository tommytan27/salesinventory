import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import UserRecord from './UserRecord';
import styles from './../constants/styles';

class UserRecordTable extends React.Component {
    renderEditUserDialog = (selectedUser) => {
        if (this.props.editDialogState.open) {
            const actions = [
                <Button flat iconChildren="clear" onClick={this.props.onEditDialogClose} id="editUserCancel">CANCEL</Button>,
                <Button flat iconChildren="mode_edit" onClick={this.props.onEditButtonClick} style={styles.flatButton.edit}>EDIT</Button>,
                <Button flat iconChildren="delete" style={styles.flatButton.delete}>DELETE</Button>
            ]
            return (
                <DialogContainer id="editUser" title="Edit User" visible={this.props.editDialogState.open} dialogStyle={styles.dialog}
                actions={actions} modal={false} onHide={this.props.onEditDialogClose} initialFocus="#editUserCancel">
                    <FormGroup validationState="success">
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl type="text" placeholder="Username" 
                            value={selectedUser.username} disabled={!this.props.editDialogState.editMode}
                            onChange={ (e) => {this.props.onUsernameFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState="success">     
                        <ControlLabel>Timeout (minutes):</ControlLabel>
                        <FormControl type="text" placeholder="0" 
                            value={selectedUser.timeout} disabled={!this.props.editDialogState.editMode}
                            onChange={ (e) => {this.props.onTimeoutFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                    </FormGroup>
                </DialogContainer>
            );
        }
        return;
    }

    renderAddUserDialog = () => {
        if (this.props.addDialogState) {
            let user = this.props.selectedUser;
            const actions = [
                <Button flat iconChildren="clear" onClick={this.props.onAddDialogClose} id="addUserCancel">CANCEL</Button>,
                <Button flat iconChildren="add" style={styles.flatButton.add}>ADD</Button>
            ]
            return (
                <DialogContainer id="addUser" title="Add User" visible={true} dialogStyle={styles.dialog}
                actions={actions} modal={false} onHide={this.props.onAddDialogClose} initialFocus="#addUserCancel">
                    <FormGroup validationState={null}>
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl type="text" placeholder="Username"
                            value={user.username ? user.username : ""}
                            onChange={ (e) => {this.props.onUsernameFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={null}>     
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl type="password" placeholder="Password"
                            value={user.password ? user.password : ""}
                            onChange={ (e) => {this.props.onPasswordFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={null}>     
                        <ControlLabel>Confirm Password:</ControlLabel>
                        <FormControl type="password" placeholder="Confirm Password"
                            value={user.confirmPassword ? user.confirmPassword : ""}
                            onChange={ (e) => {this.props.onConfirmPasswordFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={null}>     
                        <ControlLabel>Timeout (minutes):</ControlLabel>
                        <FormControl type="text" placeholder="0"
                            value={user.timeout ? user.timeout : ""}
                            onChange={ (e) => {this.props.onTimeoutFieldChange(e.target.value)} } />
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
                            <UserRecord key={user.id} {...user} onClick={() => this.props.onUserRecordClick(user)} />
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
    selectedUser: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        timeout: PropTypes.number,
        password: PropTypes.string,
        confirmPassword: PropTypes.string
    }).isRequired,
    addDialogState: PropTypes.bool.isRequired,
    editDialogState: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        editMode: PropTypes.bool.isRequired
    }).isRequired,
    onAddUserClick: PropTypes.func.isRequired,
    onUserRecordClick: PropTypes.func.isRequired,
    onAddDialogClose: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onEditDialogClose: PropTypes.func.isRequired,
    onUsernameFieldChange: PropTypes.func.isRequired,
    onTimeoutFieldChange: PropTypes.func.isRequired,
    onPasswordFieldChange: PropTypes.func.isRequired,
    onConfirmPasswordFieldChange: PropTypes.func.isRequired
};

export default UserRecordTable;