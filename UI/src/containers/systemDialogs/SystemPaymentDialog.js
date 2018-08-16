import { connect } from "react-redux";
import PaymentDialog from "../../components/dialogs/PaymentDialog";
import { closePaymentDialog, payNow, updateCashField, payCash, serverAddSales, serverAddCredit, serverSaveChangeAsCustomerCredit } from './../../actions';

const mapStateToProps = (state) => {
    return {
        paymentDialogs: state.paymentDialogs,
        activeCustomer: state.activeCustomer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closePaymentDialog()); },
        onPayNowButtonClick: () => { dispatch(payNow()); },
        onCashFieldChange: (cash) => { dispatch(updateCashField(cash)); },
        onPayCashButtonClick: () => { dispatch(payCash()); },
        onChangeTakenClick: () => { dispatch(serverAddSales()); },
        onPayLaterButtonClick: () => { dispatch(serverAddCredit()); },
        onSaveAsCreditClick: (customerCredit) => { dispatch(serverSaveChangeAsCustomerCredit(customerCredit)); }
    };
}

const SystemPaymentDialog = connect(
    mapStateToProps, mapDispatchToProps
)(PaymentDialog);

export default SystemPaymentDialog;