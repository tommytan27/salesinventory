import { connect } from 'react-redux';
import SupplierRecordTable from './../components/SupplierRecordTable';
import { openAddSupplierDialog, openEditSupplierDialog } from './../actions'

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddSupplierClick: () => { dispatch(openAddSupplierDialog()) },
        onSupplierRecordClick: (supplier) => { dispatch(openEditSupplierDialog(supplier)) }
    };
}

const SystemSupplierRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(SupplierRecordTable);

export default SystemSupplierRecordTable;