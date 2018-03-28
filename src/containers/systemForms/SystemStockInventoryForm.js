import { connect } from "react-redux";
import StockInventoryForm from "../../components/forms/StockInventoryForm";

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers,
        brands: state.brands,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const SystemStockInventoryForm = connect(
    mapStateToProps, mapDispatchToProps
)(StockInventoryForm);

export default SystemStockInventoryForm;