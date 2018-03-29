import { connect } from "react-redux";
import StockInventoryForm from "../../components/forms/StockInventoryForm";

const getFilteredItems = (state) => {
    let supplierId = state.itemSelectionForm.selectedItem.supplierId;
    let brandId = state.itemSelectionForm.selectedItem.brandId;
    return state.items.filter((item) => {
        return item.supplierId === supplierId && item.brandId === brandId;
    })
}

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers,
        brands: state.brands,
        items: getFilteredItems(state),
        itemSelectionForm: state.itemSelectionForm
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