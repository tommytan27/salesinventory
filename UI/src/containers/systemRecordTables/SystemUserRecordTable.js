import { connect } from 'react-redux';
import UserRecordTable from './../../components/recordTables/UserRecordTable';
import { openEditUserDialog, openAddUserDialog, 
    changePageAdminMainMenu, serverGetUsers } from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUserClick: () => { dispatch(openAddUserDialog()) },
        onUserRecordClick: (user) => { dispatch(openEditUserDialog(user)) },
        onBackButtonClick: () => { dispatch(changePageAdminMainMenu()) },
        onUpdatePage: () => { dispatch(serverGetUsers()) }
    };
}

const SystemUserRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(UserRecordTable);

export default SystemUserRecordTable;