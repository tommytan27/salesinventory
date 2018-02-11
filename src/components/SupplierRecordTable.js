import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import SupplierRecord from './SupplierRecord';
import styles from './../constants/styles';

class SupplierRecordTable extends React.Component {
    render() {
        return (
            <div style={styles.page}>
                <h2>Suppliers</h2>

                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Name</TableColumn>
                            <TableColumn>Contact</TableColumn>                            
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.suppliers.map((supplier) => (
                            <SupplierRecord key={supplier.id} {...supplier} onClick={() => this.props.onSupplierRecordClick(supplier)} />
                        ))}
                    </TableBody>
                </DataTable>
            </div>
        );
    }
}

SupplierRecordTable.propTypes = {
    suppliers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onSupplierRecordClick: PropTypes.func.isRequired
};

export default SupplierRecordTable;