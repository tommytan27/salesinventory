import { connect } from "react-redux";
import UserPage from "../../components/pages/UserPage";

const mapStateToProps = (state) => {
    return {
        activePage: state.activePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const SystemUserPage = connect(
    mapStateToProps, mapDispatchToProps
)(UserPage);

export default SystemUserPage;