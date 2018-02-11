import { connect } from 'react-redux';
import SupplierRecordTable from './../components/SupplierRecordTable';
import { openEditSupplierDialog } from './../actions';

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSupplierRecordClick: (supplier) => { dispatch(openEditSupplierDialog(supplier)) }
    };
}

const SystemSupplierRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(SupplierRecordTable);

export default SystemSupplierRecordTable;