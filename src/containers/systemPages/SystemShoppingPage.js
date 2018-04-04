import { connect } from "react-redux";
import ShoppingPage from "../../components/pages/ShoppingPage";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const SystemShoppingPage = connect(
    mapStateToProps, mapDispatchToProps
)(ShoppingPage);

export default SystemShoppingPage;