import { connect } from "react-redux";
import PaymentDialog from "../../components/dialogs/PaymentDialog";
import { closePaymentDialog } from './../../actions';

const mapStateToProps = (state) => {
    return {
        paymentDialogs: state.paymentDialogs,
        activeCustomer: state.activeCustomer
        // activeTab: state.activeTab,
        // searchDialogs: state.searchDialogs,
        // customers: state.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closePaymentDialog()) },
        // onCustomerComboChanged: (customerId) => { dispatch(updateCustomerCombo(customerId)) },
        // onFromDateFieldChanged: (fromDate) => { dispatch(updateFromDateField(fromDate)) },
        // onToDateFieldChanged: (toDate) => { dispatch(updateToDateField(toDate)) }
        // onSearchButtonClick: () => { dispatch(searchRecords()) }
    };
}

const SystemPaymentDialog = connect(
    mapStateToProps, mapDispatchToProps
)(PaymentDialog);

export default SystemPaymentDialog;