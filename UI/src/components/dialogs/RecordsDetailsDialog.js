import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, DataTable, TableHeader, TableBody, TableColumn, TableRow } from 'react-md';
import TableFooter from 'react-md/lib/DataTables/TableFooter';
import DetailsRecord from '../records/DetailsRecord';
import dialogModes from '../../constants/dialogModes';
import styles from './../../constants/styles';
import tabOptions from '../../constants/tabOptions';

class RecordsDetailsDialog extends React.Component { 
    getItemName = (itemBarcode) => {
        let foundItem = this.props.items.find((item) => {
            return item.barcode === itemBarcode;
        });
        return foundItem.name;
    }

    getItemPrice = (itemBarcode) => {
        let foundItem = this.props.items.find((item) => {
            return item.barcode === itemBarcode;
        });
        return foundItem.price;
    }

    getTotal = (recordsDetails) => {
        let total = 0;
        recordsDetails.forEach((record) => {
            if (this.props.activeTab === tabOptions.SALES_RECORD ||
                this.props.activeTab === tabOptions.CREDIT_RECORD) {
                total += record.qty * this.getItemPrice(record.barcode)
            }
            else {
                total += record.qty * record.costPrice
            }
        });
        return total;
    }

    renderDetailsRecord = (recordDetails) => {
        if (this.props.activeTab === tabOptions.SALES_RECORD ||
            this.props.activeTab === tabOptions.CREDIT_RECORD) {
            return (
                <DetailsRecord key={recordDetails.barcode} {...recordDetails}
                    itemName={this.getItemName(recordDetails.barcode)}
                    price={this.getItemPrice(recordDetails.barcode)} />
            );
        };
        return (
            <DetailsRecord key={recordDetails.barcode} {...recordDetails}
                itemName={this.getItemName(recordDetails.barcode)}
                price={recordDetails.sellPrice} />
        );
    }

    getCostPriceColumn = () => {
        if (this.props.activeTab !== tabOptions.SALES_RECORD &&
            this.props.activeTab !== tabOptions.CREDIT_RECORD) {
                return (<TableColumn>Cost Price</TableColumn>);
            }
        return;
    }

    getPlaceholderColumn = () => {
        if (this.props.activeTab !== tabOptions.SALES_RECORD &&
            this.props.activeTab !== tabOptions.CREDIT_RECORD) {
                return (<TableColumn></TableColumn>);
            }
        return;
    }

    render() { 
        let total = this.getTotal(this.props.recordsDetailsDialogs.recordsDetails).toFixed(2);

        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="cancelButton">CLOSE</Button>,
            <Button primary flat iconChildren="print" onClick={this.props.onPrintButtonClick} style={styles.flatButton.export}>EXPORT</Button>
        ];

        if(this.props.activeTab === tabOptions.CREDIT_RECORD) {
            actions.push(
                <Button primary flat iconChildren="attach_money" onClick={() => {this.props.onPayButtonClick(total)}}>
                    PAY
                </Button>
            );
        }

        return (
            <DialogContainer id="RecordsDetailsDialog"
                title={"Records Details"}
                visible={this.props.recordsDetailsDialogs.open} dialogStyle={{width: '80%'}}
                actions={actions} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>Barcode</TableColumn>
                            <TableColumn>Name</TableColumn>      
                            <TableColumn>Qty</TableColumn>   
                            <TableColumn>Unit Price</TableColumn>
                            {this.getCostPriceColumn()}
                            <TableColumn>Sub Total</TableColumn>                     
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.recordsDetailsDialogs.recordsDetails.map((recordDetails) => (
                            this.renderDetailsRecord(recordDetails)
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableColumn><b>Total</b></TableColumn>
                            <TableColumn></TableColumn>      
                            <TableColumn></TableColumn>   
                            <TableColumn></TableColumn>
                            {this.getPlaceholderColumn()}
                            <TableColumn>
                                ${total}
                            </TableColumn>                     
                        </TableRow>
                    </TableFooter>
                </DataTable>
            </DialogContainer>
        );
    }
}

RecordsDetailsDialog.propTypes = {
    activeTab: PropTypes.string.isRequired,
    recordsDetailsDialogs: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        recordsDetails: PropTypes.arrayOf(
            PropTypes.shape({
                barcode: PropTypes.string.isRequired,
                qty: PropTypes.number.isRequired
            }).isRequired
        ).isRequired
    }).isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            barcode: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            supplierId: PropTypes.number.isRequired,
            brandId: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            costPrice: PropTypes.number.isRequired,
            vegan: PropTypes.bool.isRequired,
            qty: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    // onPrintButtonClick: PropTypes.func.isRequired,
    onPayButtonClick: PropTypes.func.isRequired
}

export default RecordsDetailsDialog;
