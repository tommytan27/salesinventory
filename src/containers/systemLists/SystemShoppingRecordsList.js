import { connect } from "react-redux";
import { removeStockingRecordFromList } from '../../actions';
import ShoppingRecordsList from "../../components/lists/ShoppingRecordsList";

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

const SystemShoppingRecordsList = connect(
    mapStateToProps, mapDispatchToProps
)(ShoppingRecordsList);

export default SystemShoppingRecordsList;