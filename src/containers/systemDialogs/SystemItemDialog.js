import { connect } from "react-redux";
import ItemDialog from "../../components/dialogs/ItemDialog";
import { closeItemDialog, enableEditable } from "../../actions/index";

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
        // onBrandNameFieldChange: (name) => { dispatch(updateBrandNameField(name)) },
        // onAddButtonClick: () => { dispatch(addBrand()) },
        // onSaveButtonClick: () => { dispatch(saveBrand()) }
    };
}

const SystemItemDialog = connect(
    mapStateToProps, mapDispatchToProps
)(ItemDialog);

export default SystemItemDialog;