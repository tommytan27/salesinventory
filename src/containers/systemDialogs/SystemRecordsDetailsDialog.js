import { connect } from "react-redux";
import RecordsDetailsDialog from "../../components/dialogs/RecordsDetailsDialog";
import { closeRecordsDetailsDialog } from "../../actions";

const mapStateToProps = (state) => {
    return {
        recordsDetailsDialogs: state.recordsDetailsDialogs,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => { dispatch(closeRecordsDetailsDialog()) },
        // onPrintButtonClick: () => { dispatch(exportRecordsDetails()) }
    };
}

const SystemRecordsDetailsDialog = connect(
    mapStateToProps, mapDispatchToProps
)(RecordsDetailsDialog);

export default SystemRecordsDetailsDialog;