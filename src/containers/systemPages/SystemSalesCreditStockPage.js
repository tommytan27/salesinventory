import { connect } from "react-redux";
import { changeTabBrandRecord, changeTabSupplierRecord, changeTabItemRecord, 
    openAddBrandDialog, openAddItemDialog, openAddSupplierDialog, changeTabSalesRecord, changeTabCreditRecord, changeTabStockRecord, openSearchDialog } from './../../actions';
import SalesCreditStockPage from "../../components/pages/SalesCreditsStockPage";

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSalesTabClick: () => { dispatch(changeTabSalesRecord()) },
        onCreditTabClick: () => { dispatch(changeTabCreditRecord()) },
        onStockTabClick: () => { dispatch(changeTabStockRecord()) },
        onSearchButtonClick: () => { dispatch(openSearchDialog()) }
        // onAddSupplierClick: () => { dispatch(openAddSupplierDialog()) },
        // onAddBrandClick: () => { dispatch(openAddBrandDialog()) },
        // onAddItemClick: () => { dispatch(openAddItemDialog()) }
    };
}

const SystemSalesCreditStockPage = connect(
    mapStateToProps, mapDispatchToProps
)(SalesCreditStockPage);

export default SystemSalesCreditStockPage;