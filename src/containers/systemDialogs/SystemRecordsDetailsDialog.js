import { connect } from "react-redux";
import RecordsDetailsDialog from "../../components/dialogs/RecordsDetailsDialog";
import { closeRecordsDetailsDialog, payNow } from "../../actions";

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab,
        recordsDetailsDialogs: state.recordsDetailsDialogs,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeRecordsDetailsDialog()) },
        // onPrintButtonClick: () => { dispatch(exportRecordsDetails()) },
        onPayButtonClick: () => { dispatch(payNow()) }
    };
}

const SystemRecordsDetailsDialog = connect(
    mapStateToProps, mapDispatchToProps
)(RecordsDetailsDialog);

export default SystemRecordsDetailsDialog;