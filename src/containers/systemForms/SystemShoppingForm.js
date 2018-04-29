import { connect } from "react-redux";
import { selectSupplier, selectBrand, selectItem, updateQtyField, updateBarcodeField, 
    addStockingRecordToList, initiateBarcodeScanning, selectItemAndAdd, 
    changePageUserMainMenu, showShoppingForm, openSelectCustomerDialog } from "../../actions";
import ShoppingForm from "../../components/forms/ShoppingForm";

const getFilteredItems = (state) => {
    let supplierId = state.itemSelectionForm.selectedItem.supplierId;
    let brandId = state.itemSelectionForm.selectedItem.brandId;
    return state.items.filter((item) => {
        return item.supplierId === supplierId && item.brandId === brandId && item.qty > 0;
    })
}

const mapStateToProps = (state) => {
    return {
        suppliers: state.suppliers,
        brands: state.brands,
        items: getFilteredItems(state),
        allItems: state.items,
        itemSelectionForm: state.itemSelectionForm,
        activeCustomer: state.customers.find((customer) => { return customer.id === state.activeCustomer.id; })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSupplierComboChanged: (supplierId) => { dispatch(selectSupplier(supplierId)); },
        onBrandComboChanged: (brandId) => { dispatch(selectBrand(brandId)); },
        onItemComboChanged: (barcode, items) => { dispatch(selectItem(barcode, items)); },
        onQtyFieldChange: (qty) => { dispatch(updateQtyField(qty)); },
        onBarcodeFieldChange: (barcode) => { dispatch(updateBarcodeField(barcode)); },
        onBarcodeFieldEnterKey: (barcode, items) => { dispatch(selectItemAndAdd(barcode, items)); },
        onAddToListClick: (item) => { dispatch(addStockingRecordToList(item)); },
        onBarcodeButtonClick: () => { dispatch(initiateBarcodeScanning()) },
        onBackButtonClick: () => { dispatch(changePageUserMainMenu()) },
        onShoppingSearchButtonClick: () => { dispatch(showShoppingForm()); },
        onChangeCustomerButtonClick: () => { dispatch(openSelectCustomerDialog()) }
    };
}

const SystemStockInventoryForm = connect(
    mapStateToProps, mapDispatchToProps
)(ShoppingForm);

export default SystemStockInventoryForm;