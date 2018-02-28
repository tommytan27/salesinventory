import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import SalesRecord from '../records/SalesRecord';
import styles from './../../constants/styles';

class SalesRecordTable extends React.Component {
    getCustomerName = (customerId) => {
        let foundCustomer = this.props.customers.find((customer) => {
            return customer.id === customerId;
        });
        return (foundCustomer.firstName + " " + foundCustomer.lastName);
    }

    getItemPrice = (itemBarcode) => {
        let foundItem = this.props.items.find((item) => {
            return item.barcode === itemBarcode;
        });
        return foundItem.price;
    }

    render() {
        return (
            <div style={styles.page}>
                <h2>Sales</h2>

                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Date</TableColumn>      
                            <TableColumn>Customer</TableColumn>   
                            <TableColumn>Total</TableColumn>                     
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.sales.map((sale) => (
                            <SalesRecord key={sale.id} {...sale} 
                                customer={this.getCustomerName(sale.customerId)}
                                salesDetails={sale.salesDetails.map((saleDetailsRecord) => {
                                    return {
                                        qty: saleDetailsRecord.qty,
                                        price: this.getItemPrice(saleDetailsRecord.barcode)
                                    }
                                })}
                                onClick={() => this.props.onSalesRecordClick(sale.salesDetails)} />
                        ))}
                    </TableBody>
                </DataTable>
            </div>
        );
    }
}

SalesRecordTable.propTypes = {
    sales: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            customerId: PropTypes.number.isRequired,
            salesDetails: PropTypes.arrayOf(
                PropTypes.shape({
                    barcode: PropTypes.string.isRequired,
                    qty: PropTypes.number.isRequired
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
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
    onSalesRecordClick: PropTypes.func.isRequired
};

export default SalesRecordTable;