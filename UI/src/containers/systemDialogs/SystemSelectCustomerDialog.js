import { connect } from "react-redux";
import SelectCustomerDialog from "../../components/dialogs/SelectCustomerDialog";
import { changePageUserMainMenu, closeSelectCustomerDialog, selectCustomer, selectAnonymous, openAddCustomerDialog } from "../../actions";

const mapStateToProps = (state) => {
    return {
        selectCustomerDialogs: state.selectCustomerDialogs,
        activeCustomer: state.activeCustomer,
        customers: state.customers,
        suppliers: state.suppliers,
        brands: state.brands
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBackButtonClick: () => { dispatch(changePageUserMainMenu()); },
        onDialogClose: () => { dispatch(closeSelectCustomerDialog()); },
        onCustomerComboChanged: (customerId) => { dispatch(selectCustomer(customerId)); },
        onShopAsAnonymousClick: () => { dispatch(selectAnonymous()); },
        onNewCustomerClick: () => { dispatch(openAddCustomerDialog()); }
    };
}

const SystemSelectCustomerDialog = connect(
    mapStateToProps, mapDispatchToProps
)(SelectCustomerDialog);

export default SystemSelectCustomerDialog;