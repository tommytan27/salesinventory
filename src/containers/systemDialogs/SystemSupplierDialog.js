import { connect } from "react-redux";
import SupplierDialog from "../../components/dialogs/SupplierDialog";
import { closeSupplierDialog, enableEditable, updateSupplierNameField,
    updateContactField, addSupplier, saveSupplier } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        dialogState: state.supplierDialogs.dialogState,
        supplierInDialog: state.supplierDialogs.supplierInDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeSupplierDialog()) },
        onEditButtonClick: () => { dispatch(enableEditable()) },
        onSupplierNameFieldChange: (name) => { dispatch(updateSupplierNameField(name)) },   
        onContactFieldChange: (contact) => { dispatch(updateContactField(contact)) },
        onAddButtonClick: () => { dispatch(addSupplier()) },
        onSaveButtonClick: () => { dispatch(saveSupplier()) }
    };
}

const SystemSupplierDialog = connect(
    mapStateToProps, mapDispatchToProps
)(SupplierDialog);

export default SystemSupplierDialog;