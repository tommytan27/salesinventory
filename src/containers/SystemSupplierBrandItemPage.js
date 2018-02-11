import { connect } from "react-redux";
import SupplierBrandItemPage from "../components/SupplierBrandItemPage";
import { openAddSupplierDialog, changeTabSupplierRecord, changeTabBrandRecord, changeTabItemRecord } from './../actions';

const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSupplierTabClick: () => { dispatch(changeTabSupplierRecord()) },
        onBrandTabClick: () => { dispatch(changeTabBrandRecord()) },
        onItemTabClick: () => { dispatch(changeTabItemRecord()) },
        onAddSupplierClick: () => { dispatch(openAddSupplierDialog()) },
        // onAddBrandClick: () => { dispatch(openAddBrandDialog()) },
        // onAddItemClick: () => { dispatch(openAddItemDialog()) }
    };
}

const SystemSupplierBrandItemPage = connect(
    mapStateToProps, mapDispatchToProps
)(SupplierBrandItemPage);

export default SystemSupplierBrandItemPage;