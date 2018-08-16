import { connect } from "react-redux";
import PriceCheckDialog from "../../components/dialogs/PriceCheckDialog";
import { closePriceCheckDialog, updateBarcodeField, 
    initiateBarcodeScanning, 
    selectItem} from './../../actions';

const mapStateToProps = (state) => {
    return {
        priceCheckDialogs: state.priceCheckDialogs,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closePriceCheckDialog()); },
        onBarcodeFieldChange: (barcode) => { dispatch(updateBarcodeField(barcode)); },
        onBarcodeButtonClick: () => { dispatch(initiateBarcodeScanning()) },
        onBarcodeFieldEnterKey: (barcode, items) => { dispatch(selectItem(barcode, items)); }
    };
}

const SystemPriceCheckDialog = connect(
    mapStateToProps, mapDispatchToProps
)(PriceCheckDialog);

export default SystemPriceCheckDialog;