import { connect } from "react-redux";
import StockInventoryPage from "../../components/pages/StockInventoryPage";

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers,
        brands: state.brands,
        items: state.items,
        stockingRecords: state.stockingRecords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const SystemStockInventoryPage = connect(
    mapStateToProps, mapDispatchToProps
)(StockInventoryPage);

export default SystemStockInventoryPage;