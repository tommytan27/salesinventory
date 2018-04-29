import { connect } from "react-redux";
import BrandDialog from "../../components/dialogs/BrandDialog";
import { closeBrandDialog, enableEditable, updateBrandNameField,
    signalRAddBrand, signalRSaveBrand, signalRDeleteBrand } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        dialogState: state.brandDialogs.dialogState,
        brandInDialog: state.brandDialogs.brandInDialog,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeBrandDialog()) },
        onEditButtonClick: () => { dispatch(enableEditable()) },
        onBrandNameFieldChange: (name) => { dispatch(updateBrandNameField(name)) },
        onAddButtonClick: () => { dispatch(signalRAddBrand()) },
        onSaveButtonClick: () => { dispatch(signalRSaveBrand()) },
        onDeleteButtonClick: () => { dispatch(signalRDeleteBrand()); }
    };
}

const SystemBrandDialog = connect(
    mapStateToProps, mapDispatchToProps
)(BrandDialog);

export default SystemBrandDialog;