import { connect } from 'react-redux';
import UserRecordTable from './../components/UserRecordTable';
import { openEditUserDialog, openAddUserDialog } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUserClick: () => { dispatch(openAddUserDialog()) },
        onUserRecordClick: (user) => { dispatch(openEditUserDialog(user)) }
    };
}

const SystemUserRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(UserRecordTable);

export default SystemUserRecordTable;