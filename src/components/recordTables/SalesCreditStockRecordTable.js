import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import SalesCreditStockRecord from '../records/SalesCreditStockRecord';
import styles from './../../constants/styles';

class SalesCreditStockRecordTable extends React.Component {
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
                        {this.props.records.map((sale) => (
                            <SalesCreditStockRecord key={sale.id} {...sale} 
                                customer={this.getCustomerName(sale.customerId)}
                                details={sale.details.map((saleDetailsRecord) => {
                                    return {
                                        qty: saleDetailsRecord.qty,
                                        price: this.getItemPrice(saleDetailsRecord.barcode)
                                    }
                                })}
                                onClick={() => this.props.onRecordClick(sale.details)} />
                        ))}
                    </TableBody>
                </DataTable>
            </div>
        );
    }
}

SalesCreditStockRecordTable.propTypes = {
    records: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            customerId: PropTypes.number.isRequired,
            details: PropTypes.arrayOf(
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
    onRecordClick: PropTypes.func.isRequired
};

export default SalesCreditStockRecordTable;