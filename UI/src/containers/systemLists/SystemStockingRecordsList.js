import { connect } from "react-redux";
import { removeStockingRecordFromList, serverAddStock } from '../../actions';
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
        onDoneButtonClick: () => { dispatch(serverAddStock()); }
    };
}

const SystemStockingRecordsList = connect(
    mapStateToProps, mapDispatchToProps
)(StockingRecordsList);

export default SystemStockingRecordsList;