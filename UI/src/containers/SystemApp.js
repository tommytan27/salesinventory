import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = (state) => {
    return {
        activeMode: state.activeMode,
        customers: state.customers,
        // loginDialog: state.loginDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const SystemApp = connect(
    mapStateToProps, mapDispatchToProps
)(App);

export default SystemApp;