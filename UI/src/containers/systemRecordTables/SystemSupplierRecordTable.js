import { connect } from 'react-redux';
import SupplierRecordTable from './../../components/recordTables/SupplierRecordTable';
import { openEditSupplierDialog, serverGetSuppliers } from './../../actions';

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSupplierRecordClick: (supplier) => { dispatch(openEditSupplierDialog(supplier)) },
        onUpdatePage: () => { dispatch(serverGetSuppliers()) }
    };
}

const SystemSupplierRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(SupplierRecordTable);

export default SystemSupplierRecordTable;