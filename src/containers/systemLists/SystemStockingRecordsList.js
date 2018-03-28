import { connect } from "react-redux";
import StockingRecordsList from "../../components/lists/StockingRecordsList";

const mapStateToProps = (state) => {
    return {
        items: state.items,
        stockingRecords: state.stockingRecords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const SystemStockingRecordsList = connect(
    mapStateToProps, mapDispatchToProps
)(StockingRecordsList);

export default SystemStockingRecordsList;