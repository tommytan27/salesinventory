import { connect } from "react-redux";
import { changeModeAdmin } from '../../actions'
import UserMenuPage from "../../components/pages/UserMenuPage";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdminButtonClick: () => { dispatch(changeModeAdmin()); }
    };
}

const SystemUserMenuPage = connect(
    mapStateToProps, mapDispatchToProps
)(UserMenuPage);

export default SystemUserMenuPage;