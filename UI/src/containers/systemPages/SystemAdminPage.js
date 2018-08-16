import { connect } from "react-redux";
import AdminPage from "../../components/pages/AdminPage";

const mapStateToProps = (state) => {
    return {
        activePage: state.activePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const SystemAdminPage = connect(
    mapStateToProps, mapDispatchToProps
)(AdminPage);

export default SystemAdminPage;