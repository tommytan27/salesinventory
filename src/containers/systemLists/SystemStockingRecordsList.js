import { connect } from "react-redux";
import { removeStockingRecordFromList } from '../../actions';
import StockingRecordsList from "../../components/lists/StockingRecordsList";

const mapStateToProps = (state) => {
    return {
        items: state.items,
        stockingRecords: state.stockingRecords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveClick: (recordId) => { dispatch(removeStockingRecordFromList(recordId)); }
    };
}

const SystemStockingRecordsList = connect(
    mapStateToProps, mapDispatchToProps
)(StockingRecordsList);

export default SystemStockingRecordsList;