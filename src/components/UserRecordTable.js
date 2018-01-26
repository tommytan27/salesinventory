import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import UserRecord from './UserRecord';
import styles from './../constants/styles';

class UserRecordTable extends React.Component {
    renderConfirmPasswordHelpBlock = (state) => {
        if (state === "error") {
            return (<HelpBlock>Password did not match</HelpBlock>);
        }
        return;
    }

    renderPasswordHelpBlock = (state) => {
        switch (state) {
            case "error":
                return (<HelpBlock>Bad password.</HelpBlock>);
            case "warning":
                return (<HelpBlock>Weak password.</HelpBlock>);
            case "success":
                return (<HelpBlock>Strong password.</HelpBlock>);
        }
        return;
    }

    renderUsernameHelpBlock = (state) => {
        if (state === "error") {
            return (<HelpBlock>Username is invalid. Try other username.</HelpBlock>);
        }
        return;
    }

    renderEditUserDialog = (user) => {
        if (this.props.editDialogState.open) {
            const actions = [
                <Button flat iconChildren="clear" onClick={this.props.onEditDialogClose} id="editUserCancel">CANCEL</Button>
            ];
            if (!this.props.editDialogState.editMode) {
                actions.push(
                    <Button flat iconChildren="mode_edit" onClick={this.props.onEditButtonClick} style={styles.flatButton.edit}>EDIT</Button>
                );
            }
            else {
                actions.push(
                    <Button flat iconChildren="save" onClick={this.props.onEditButtonClick} style={styles.flatButton.save}>SAVE</Button>
                );
            }
            actions.push(
                <Button flat iconChildren="delete" style={styles.flatButton.delete}>DELETE</Button>
            );

            return (
                <DialogContainer id="editUser" title="Edit User" visible={this.props.editDialogState.open} dialogStyle={styles.dialog}
                actions={actions} modal={false} onHide={this.props.onEditDialogClose} initialFocus="#editUserCancel">
                    <FormGroup validationState={user.username.state}>
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl type="text" placeholder="Username" 
                            value={user.username.value} disabled={true}
                            onChange={ (e) => {this.props.onUsernameFieldChange(e.target.value, this.props.users)} } />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={user.timeout.state}>     
                        <ControlLabel>Timeout (minutes):</ControlLabel>
                        <FormControl type="text" placeholder="0" 
                            value={user.timeout.value ? user.timeout.value : ""} disabled={!this.props.editDialogState.editMode}
                            onChange={ (e) => {this.props.onTimeoutFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                    </FormGroup>
                </DialogContainer>
            );
        }
        return;
    }

    renderAddUserDialog = (user) => {
        if (this.props.addDialogState) {
            const actions = [
                <Button flat iconChildren="clear" onClick={this.props.onAddDialogClose} id="addUserCancel">CANCEL</Button>,
                <Button flat iconChildren="add" style={styles.flatButton.add}>ADD</Button>
            ]
            return (
                <DialogContainer id="addUser" title="Add User" visible={true} dialogStyle={styles.dialog}
                actions={actions} modal={false} onHide={this.props.onAddDialogClose} initialFocus="#addUserCancel">
                    <FormGroup validationState={user.username.state}>
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl type="text" placeholder="Username"
                            value={user.username.value ? user.username.value : ""}
                            onChange={ (e) => {this.props.onUsernameFieldChange(e.target.value, this.props.users)} } />
                        <FormControl.Feedback />
                        {this.renderUsernameHelpBlock(user.username.state)}
                    </FormGroup>
                    <FormGroup validationState={user.password.state}>     
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl type="password" placeholder="Password"
                            value={user.password.value ? user.password.value : ""}
                            onChange={ (e) => {this.props.onPasswordFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                        {this.renderPasswordHelpBlock(user.password.state)}
                    </FormGroup>
                    <FormGroup validationState={user.confirmPassword.state}>     
                        <ControlLabel>Confirm Password:</ControlLabel>
                        <FormControl type="password" placeholder="Confirm Password"
                            value={user.confirmPassword.value ? user.confirmPassword.value : ""}
                            onChange={ (e) => {this.props.onConfirmPasswordFieldChange(e.target.value)} } />
                        <FormControl.Feedback />
                        {this.renderConfirmPasswordHelpBlock(user.confirmPassword.state)}
                    </FormGroup>
                    <FormGroup validationState={user.timeout.state}>     
                        <ControlLabel>Timeout (minutes):</ControlLabel>
                        <FormControl type="text" placeholder="0"
                            value={user.timeout.value ? user.timeout.value : ""}
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
                
                {this.renderEditUserDialog(this.props.userInDialog)}
                {this.renderAddUserDialog(this.props.userInDialog)}
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
    userInDialog: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        timeout: PropTypes.shape({
            value: PropTypes.number,
            state: PropTypes.string
        }),
        password: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        }),
        confirmPassword: PropTypes.shape({
            value: PropTypes.string,
            state: PropTypes.string
        })
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