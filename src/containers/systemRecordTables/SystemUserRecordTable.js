import { connect } from 'react-redux';
import UserRecordTable from './../../components/recordTables/UserRecordTable';
import { openEditUserDialog, openAddUserDialog, changePageAdminMainMenu } from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUserClick: () => { dispatch(openAddUserDialog()) },
        onUserRecordClick: (user) => { dispatch(openEditUserDialog(user)) },
        onBackButtonClick: () => { dispatch(changePageAdminMainMenu()) }
    };
}

const SystemUserRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(UserRecordTable);

export default SystemUserRecordTable;