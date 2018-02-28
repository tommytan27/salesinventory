import { connect } from 'react-redux';
import SalesRecordTable from './../../components/recordTables/SalesRecordTable';
import { openRecordsDetailsDialog } from './../../actions';

const mapStateToProps = (state) => {
    return {
        sales: state.sales,
        customers: state.customers,
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSalesRecordClick: (salesDetails) => { dispatch(openRecordsDetailsDialog(salesDetails)) }
    };
}

const SystemSalesRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(SalesRecordTable);

export default SystemSalesRecordTable;