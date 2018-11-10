import { connect } from 'react-redux';
import BrandRecordTable from './../../components/recordTables/BrandRecordTable';
import { openEditBrandDialog, serverGetBrands } from './../../actions';

const mapStateToProps = (state) => {
    return {
        brands: state.brands
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBrandRecordClick: (brand) => { dispatch(openEditBrandDialog(brand)) },
        onUpdatePage: () => { dispatch(serverGetBrands()) }
    };
}

const SystemBrandRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(BrandRecordTable);

export default SystemBrandRecordTable;