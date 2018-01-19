import { connect } from 'react-redux';
import UserRecordTable from './../components/UserRecordTable';
import { openEditUserDialog, closeEditUserDialog } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        selectedUser: state.selectedRecord.user,
        editDialogState: state.dialogs.editUser.open,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditDialogClose: () => { dispatch(closeEditUserDialog()) },
        onUserRecordClick: (userID) => { dispatch(openEditUserDialog(userID)) }
    };
}

const SystemUserRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(UserRecordTable);

export default SystemUserRecordTable;