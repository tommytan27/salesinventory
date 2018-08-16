import { connect } from 'react-redux';
import ItemRecordTable from '../../components/recordTables/ItemRecordTable';
import { openEditItemDialog } from './../../actions';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemRecordClick: (item) => { dispatch(openEditItemDialog(item)) }
    };
}

const SystemItemRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(ItemRecordTable);

export default SystemItemRecordTable;