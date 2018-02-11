import { connect } from 'react-redux';
import BrandRecordTable from './../components/BrandRecordTable';
import { openEditBrandDialog } from './../actions';

const mapStateToProps = (state) => {
    return {
        brands: state.brands
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBrandRecordClick: (brand) => { dispatch(openEditBrandDialog(brand)) }
    };
}

const SystemBrandRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(BrandRecordTable);

export default SystemBrandRecordTable;