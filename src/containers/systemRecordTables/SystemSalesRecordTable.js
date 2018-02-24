import { connect } from 'react-redux';
import SalesRecordTable from './../../components/recordTables/SalesRecordTable';
// import { openEditBrandDialog } from './../../actions';

const mapStateToProps = (state) => {
    return {
        sales: state.sales,
        customers: state.customers,
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onBrandRecordClick: (brand) => { dispatch(openEditBrandDialog(brand)) }
    };
}

const SystemSalesRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(SalesRecordTable);

export default SystemSalesRecordTable;