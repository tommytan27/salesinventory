import { connect } from "react-redux";
import { removeStockingRecordFromList, signalRAddStock } from '../../actions';
import StockingRecordsList from "../../components/lists/StockingRecordsList";

const mapStateToProps = (state) => {
    return {
        items: state.items,
        stockShopRecords: state.stockShopRecords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveClick: (recordId) => { dispatch(removeStockingRecordFromList(recordId)); },
        onDoneButtonClick: () => { dispatch(signalRAddStock()); }
    };
}

const SystemStockingRecordsList = connect(
    mapStateToProps, mapDispatchToProps
)(StockingRecordsList);

export default SystemStockingRecordsList;