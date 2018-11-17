import { connect } from "react-redux";
import { openLoginDialog, changePageUserShoppingPage, openPriceCheckDialog, serverGetCustomers, serverGetSuppliers, serverGetBrands, serverGetItems } from '../../actions'
import UserMenuPage from "../../components/pages/UserMenuPage";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdminButtonClick: () => { dispatch(openLoginDialog()); },
        onShoppingButtonClick: () => { dispatch(changePageUserShoppingPage()); },
        onPriceCheckButtonClick: () => { dispatch(openPriceCheckDialog()); },
        onUpdatePage: () => { 
            dispatch(serverGetCustomers()); 
            dispatch(serverGetSuppliers()); 
            dispatch(serverGetBrands()); 
            dispatch(serverGetItems());
        }
    };
}

const SystemUserMenuPage = connect(
    mapStateToProps, mapDispatchToProps
)(UserMenuPage);

export default SystemUserMenuPage;