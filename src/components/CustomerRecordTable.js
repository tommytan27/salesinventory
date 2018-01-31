import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, Button, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import CustomerRecord from './CustomerRecord';
import SystemCustomerDialog from '../containers/SystemCustomerDialog';
import styles from './../constants/styles';

class CustomerRecordTable extends React.Component {
    render() {
        return (
            <div style={styles.page}>
                <h2>Customers</h2>

                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>First Name</TableColumn>
                            <TableColumn>Last Name</TableColumn>
                            <TableColumn>Contact</TableColumn>                            
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.customers.map((customer) => (
                            <CustomerRecord key={customer.id} {...customer} onClick={() => this.props.onCustomerRecordClick(customer)} />
                        ))}
                    </TableBody>
                </DataTable>
                
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.props.onAddCustomerClick}>
                    add
                </Button>

                 <SystemCustomerDialog /> 
            </div>
        );
    }
}

CustomerRecordTable.propTypes = {
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onAddCustomerClick: PropTypes.func.isRequired,
    onCustomerRecordClick: PropTypes.func.isRequired
};

export default CustomerRecordTable;