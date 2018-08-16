import { connect } from "react-redux";
import SupplierDialog from "../../components/dialogs/SupplierDialog";
import { closeSupplierDialog, enableEditable, updateSupplierNameField,
    updateContactField, serverAddSupplier, serverSaveSupplier, serverDeleteSupplier } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        dialogState: state.supplierDialogs.dialogState,
        supplierInDialog: state.supplierDialogs.supplierInDialog,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeSupplierDialog()) },
        onEditButtonClick: () => { dispatch(enableEditable()) },
        onSupplierNameFieldChange: (name) => { dispatch(updateSupplierNameField(name)) },   
        onContactFieldChange: (contact) => { dispatch(updateContactField(contact)) },
        onAddButtonClick: () => { dispatch(serverAddSupplier()) },
        onSaveButtonClick: () => { dispatch(serverSaveSupplier()) },
        onDeleteButtonClick: () => { dispatch(serverDeleteSupplier()); }
    };
}

const SystemSupplierDialog = connect(
    mapStateToProps, mapDispatchToProps
)(SupplierDialog);

export default SystemSupplierDialog;