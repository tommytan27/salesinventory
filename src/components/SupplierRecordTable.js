import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import SupplierRecord from './SupplierRecord';
import SystemSupplierDialog from '../containers/SystemSupplierDialog';
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
                
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.props.onAddSupplierClick}>
                    add
                </Button>

                 <SystemSupplierDialog /> 
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
    onAddSupplierClick: PropTypes.func.isRequired,
    onSupplierRecordClick: PropTypes.func.isRequired
};

export default SupplierRecordTable;