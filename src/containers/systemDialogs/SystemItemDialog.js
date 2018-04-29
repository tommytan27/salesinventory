import { connect } from "react-redux";
import ItemDialog from "../../components/dialogs/ItemDialog";
import { closeItemDialog, enableEditable, updateItemNameField, 
    updateBarcodeField, updateQtyField, updateSellPriceField, 
    toggleVeganFlag, selectSupplier, selectBrand,
    signalRAddItem, signalRSaveItem, signalRDeleteItem} from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        dialogState: state.itemDialogs.dialogState,
        itemInDialog: state.itemDialogs.itemInDialog,
        suppliers: state.suppliers,
        brands: state.brands
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeItemDialog()) },
        onEditButtonClick: () => { dispatch(enableEditable()) },
        onItemNameFieldChange: (name) => { dispatch(updateItemNameField(name)) },
        onBarcodeFieldChange: (barcode) => { dispatch(updateBarcodeField(barcode)) },
        onSellPriceFieldChange: (price) => { dispatch(updateSellPriceField(price)) },
        onQtyFieldChange: (qty) => { dispatch(updateQtyField(qty)) },
        onVeganFlagToggled: () => { dispatch(toggleVeganFlag()) },
        onSupplierComboChanged: (supplierId) => { dispatch(selectSupplier(supplierId)) },
        onBrandComboChanged: (brandId) => { dispatch(selectBrand(brandId)) },
        onAddButtonClick: () => { dispatch(signalRAddItem()) },
        onSaveButtonClick: () => { dispatch(signalRSaveItem()) },
        onDeleteButtonClick: () => { dispatch(signalRDeleteItem()); }
    };
}

const SystemItemDialog = connect(
    mapStateToProps, mapDispatchToProps
)(ItemDialog);

export default SystemItemDialog;