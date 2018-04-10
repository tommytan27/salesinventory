import { connect } from "react-redux";
import PaymentDialog from "../../components/dialogs/PaymentDialog";
import { closePaymentDialog, payNow, updateCashField } from './../../actions';
import { payCash } from './../../actions/index';

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
        onDialogClose: () => { dispatch(closePaymentDialog()); },
        onPayNowButtonClick: () => { dispatch(payNow()); },
        onCashFieldChange: (cash) => { dispatch(updateCashField(cash)); },
        onPayCashButtonClick: () => { dispatch(payCash()); }
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