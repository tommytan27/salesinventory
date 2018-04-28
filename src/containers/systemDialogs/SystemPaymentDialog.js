import { connect } from "react-redux";
import PaymentDialog from "../../components/dialogs/PaymentDialog";
import { closePaymentDialog, payNow, updateCashField, payCash, signalRAddSales, signalRAddCredit, signalRSaveChangeAsCustomerCredit } from './../../actions';

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
        onChangeTakenClick: () => { dispatch(signalRAddSales()); },
        onPayLaterButtonClick: () => { dispatch(signalRAddCredit()); },
        onSaveAsCreditClick: (customerCredit) => { dispatch(signalRSaveChangeAsCustomerCredit(customerCredit)); }
    };
}

const SystemPaymentDialog = connect(
    mapStateToProps, mapDispatchToProps
)(PaymentDialog);

export default SystemPaymentDialog;