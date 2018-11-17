import { connect } from 'react-redux';
import ItemRecordTable from '../../components/recordTables/ItemRecordTable';
import { openEditItemDialog, serverGetItems } from './../../actions';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemRecordClick: (item) => { dispatch(openEditItemDialog(item)) },
        onUpdatePage: () => { dispatch(serverGetItems()) }
    };
}

const SystemItemRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(ItemRecordTable);

export default SystemItemRecordTable;