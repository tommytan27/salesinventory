import { connect } from "react-redux";
import { changePageAdminMainMenu, changePageAdminUserRecords,
    changePageAdminCustomerRecords, changePageAdminProductsPage, 
    changePageAdminStockingPage, changePageAdminRecordsHistory } from '../../actions'
import AdminMenuPage from "../../components/pages/AdminMenuPage";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserRecordsButtonClick: () => { dispatch(changePageAdminUserRecords()); },
        onCustomerRecordsButtonClick: () => { dispatch(changePageAdminCustomerRecords()); },
        onProductsDetailsButtonClick: () => { dispatch(changePageAdminProductsPage()); },
        onStockingButtonClick: () => { dispatch(changePageAdminStockingPage()); },
        onRecordsHistoryButtonClick: () => { dispatch(changePageAdminRecordsHistory()); }
    };
}

const SystemAdminMenuPage = connect(
    mapStateToProps, mapDispatchToProps
)(AdminMenuPage);

export default SystemAdminMenuPage;