import { connect } from "react-redux";
import { removeStockingRecordFromList } from '../../actions';
import ShoppingRecordsList from "../../components/lists/ShoppingRecordsList";

const mapStateToProps = (state) => {
    return {
        items: state.items,
        stockShopRecords: state.stockShopRecords,
        selectCustomerDialogs: state.selectCustomerDialogs,
        activeCustomer: state.customers.find((customer) => { return customer.id === state.activeCustomer.id; })
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