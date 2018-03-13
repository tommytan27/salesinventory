import { connect } from 'react-redux';
import SalesCreditStockRecordTable from './../../components/recordTables/SalesCreditStockRecordTable';
import { openRecordsDetailsDialog } from './../../actions';

const mapStateToProps = (state) => {
    return {
        records: state.credits,
        customers: state.customers,
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRecordClick: (salesDetails) => { dispatch(openRecordsDetailsDialog(salesDetails)) }
    };
}

const SystemCreditsRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(SalesCreditStockRecordTable);

export default SystemCreditsRecordTable;