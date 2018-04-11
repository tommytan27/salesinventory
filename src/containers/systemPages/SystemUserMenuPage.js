import { connect } from "react-redux";
import { openLoginDialog, changePageUserShoppingPage, openPriceCheckDialog } from '../../actions'
import UserMenuPage from "../../components/pages/UserMenuPage";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdminButtonClick: () => { dispatch(openLoginDialog()); },
        onShoppingButtonClick: () => { dispatch(changePageUserShoppingPage()); },
        onPriceCheckButtonClick: () => { dispatch(openPriceCheckDialog()); }
    };
}

const SystemUserMenuPage = connect(
    mapStateToProps, mapDispatchToProps
)(UserMenuPage);

export default SystemUserMenuPage;