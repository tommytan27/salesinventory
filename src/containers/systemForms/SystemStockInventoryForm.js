import { connect } from "react-redux";
import { selectSupplier, selectBrand, selectItem, updateCostPriceField, 
    updateSellPriceField, updateQtyField, updateBarcodeField, 
    addStockingRecordToList, initiateBarcodeScanning, selectItemAndAdd, changePageAdminMainMenu } from "../../actions";
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
        allItems: state.items,
        itemSelectionForm: state.itemSelectionForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSupplierComboChanged: (supplierId) => { dispatch(selectSupplier(supplierId)); },
        onBrandComboChanged: (brandId) => { dispatch(selectBrand(brandId)); },
        onItemComboChanged: (barcode, items) => { dispatch(selectItem(barcode, items)); },
        onSellPriceFieldChange: (sellPrice) => { dispatch(updateSellPriceField(sellPrice)); },
        onCostPriceFieldChange: (costPrice) => { dispatch(updateCostPriceField(costPrice)); },
        onQtyFieldChange: (qty) => { dispatch(updateQtyField(qty)); },
        onBarcodeFieldChange: (barcode) => { dispatch(updateBarcodeField(barcode)); },
        onBarcodeFieldEnterKey: (barcode, items) => { dispatch(selectItemAndAdd(barcode, items)); },
        onAddToListClick: (item) => { dispatch(addStockingRecordToList(item)); },
        onBarcodeButtonClick: () => { dispatch(initiateBarcodeScanning()) },
        onBackButtonClick: () => { dispatch(changePageAdminMainMenu()) }
    };
}

const SystemStockInventoryForm = connect(
    mapStateToProps, mapDispatchToProps
)(StockInventoryForm);

export default SystemStockInventoryForm;