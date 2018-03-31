import { connect } from 'react-redux';
import CustomerRecordTable from './../../components/recordTables/CustomerRecordTable';
import { openAddCustomerDialog, openEditCustomerDialog, changePageAdminMainMenu } from '../../actions';

const mapStateToProps = (state) => {
    return {
        customers: state.customers.slice(1)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCustomerClick: () => { dispatch(openAddCustomerDialog()) },
        onCustomerRecordClick: (customer) => { dispatch(openEditCustomerDialog(customer)) },
        onBackButtonClick: () => { dispatch(changePageAdminMainMenu()) }
    };
}

const SystemCustomerRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(CustomerRecordTable);

export default SystemCustomerRecordTable;