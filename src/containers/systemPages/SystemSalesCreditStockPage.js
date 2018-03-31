import { connect } from "react-redux";
import { changeTabBrandRecord, changeTabSupplierRecord, changeTabItemRecord, 
    openAddBrandDialog, openAddItemDialog, openAddSupplierDialog, changeTabSalesRecord, changeTabCreditRecord, 
    changeTabStockRecord, openSearchDialog, changePageAdminMainMenu } from './../../actions';
import SalesCreditStockPage from "../../components/pages/SalesCreditsStockPage";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSalesTabClick: () => { dispatch(changeTabSalesRecord()) },
        onCreditTabClick: () => { dispatch(changeTabCreditRecord()) },
        onStockTabClick: () => { dispatch(changeTabStockRecord()) },
        onSearchButtonClick: () => { dispatch(openSearchDialog()) },
        onBackButtonClick: () => { dispatch(changePageAdminMainMenu()) }
    };
}

const SystemSalesCreditStockPage = connect(
    mapStateToProps, mapDispatchToProps
)(SalesCreditStockPage);

export default SystemSalesCreditStockPage;