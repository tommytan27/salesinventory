import { connect } from "react-redux";
import StockInventoryPage from "../../components/pages/StockInventoryPage";

const mapStateToProps = (state) => {
    return {
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