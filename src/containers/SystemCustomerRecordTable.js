import { connect } from 'react-redux';
import CustomerRecordTable from './../components/CustomerRecordTable';
import { openAddCustomerDialog, openEditCustomerDialog } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCustomerClick: () => { dispatch(openAddCustomerDialog()) },
        onCustomerRecordClick: (customer) => { dispatch(openEditCustomerDialog(customer)) }
    };
}

const SystemCustomerRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(CustomerRecordTable);

export default SystemCustomerRecordTable;