import { connect } from 'react-redux';
import SupplierRecordTable from './../components/SupplierRecordTable';
// import { openAddCustomerDialog, openEditCustomerDialog } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onAddCustomerClick: () => { dispatch(openAddCustomerDialog()) },
        // onCustomerRecordClick: (customer) => { dispatch(openEditCustomerDialog(customer)) }
    };
}

const SystemSupplierRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(SupplierRecordTable);

export default SystemSupplierRecordTable;