import { connect } from "react-redux";
import SearchDialog from "../../components/dialogs/SearchDialog";
import { closeSearchDialog, updateCustomerCombo, 
    updateFromDateField, updateToDateField } from "../../actions";

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        searchDialogs: state.searchDialogs,
        customers: state.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeSearchDialog()) },
        onCustomerComboChanged: (customerId) => { dispatch(updateCustomerCombo(customerId)) },
        onFromDateFieldChanged: (fromDate) => { dispatch(updateFromDateField(fromDate)) },
        onToDateFieldChanged: (toDate) => { dispatch(updateToDateField(toDate)) }
        // onSearchButtonClick: () => { dispatch(saveBrand()) }
    };
}

const SystemSearchDialog = connect(
    mapStateToProps, mapDispatchToProps
)(SearchDialog);

export default SystemSearchDialog;