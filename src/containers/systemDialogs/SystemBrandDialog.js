import { connect } from "react-redux";
import BrandDialog from "../../components/dialogs/BrandDialog";
import { closeBrandDialog, enableEditable, updateBrandNameField,
    addBrand, saveBrand } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        dialogState: state.brandDialogs.dialogState,
        brandInDialog: state.brandDialogs.brandInDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeBrandDialog()) },
        onEditButtonClick: () => { dispatch(enableEditable()) },
        onBrandNameFieldChange: (name) => { dispatch(updateBrandNameField(name)) },
        onAddButtonClick: () => { dispatch(addBrand()) },
        onSaveButtonClick: () => { dispatch(saveBrand()) }
    };
}

const SystemBrandDialog = connect(
    mapStateToProps, mapDispatchToProps
)(BrandDialog);

export default SystemBrandDialog;