import { connect } from 'react-redux';
import UserRecordTable from './../components/UserRecordTable';
import { openEditUserDialog, closeEditUserDialog, openAddUserDialog, closeAddUserDialog } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        selectedUser: state.selectedRecord.user,
        addDialogState: state.userDialogs.addUser.open,
        editDialogState: state.userDialogs.editUser.open,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUserClick: () => { dispatch(openAddUserDialog()) },
        onUserRecordClick: (userID) => { dispatch(openEditUserDialog(userID)) },
        onAddDialogClose: () => { dispatch(closeAddUserDialog()) },
        onEditDialogClose: () => { dispatch(closeEditUserDialog()) }
    };
}

const SystemUserRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(UserRecordTable);

export default SystemUserRecordTable;