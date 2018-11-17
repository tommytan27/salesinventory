import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import ItemRecord from '../records/ItemRecord';
import styles from './../../constants/styles';

class ItemRecordTable extends React.Component {
    componentDidMount() {
        this.props.onUpdatePage();
    }

    render() {
        return (
            <div style={styles.pageTable}>
                <h2>Items</h2>

                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>Barcode</TableColumn>
                            <TableColumn>Item Name</TableColumn>
                            <TableColumn>Sell Price</TableColumn>
                            <TableColumn>Qty</TableColumn>
                            <TableColumn>Vegan</TableColumn>                        
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.items.map((item) => (
                            <ItemRecord key={item.barcode} {...item} onClick={() => this.props.onItemRecordClick(item)} />
                        ))}
                    </TableBody>
                </DataTable>
            </div>
        );
    }
}

ItemRecordTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            barcode: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            supplierId: PropTypes.number.isRequired,
            brandId: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            vegan: PropTypes.bool.isRequired,
            qty: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onItemRecordClick: PropTypes.func.isRequired,
    onUpdatePage: PropTypes.func.isRequired
};

export default ItemRecordTable;