import React from 'react';
import { PropTypes } from 'prop-types';
import { TabsContainer, Tabs, Tab, Button } from 'react-md';
import SystemSalesRecordTable from '../../containers/systemRecordTables/SystemSalesRecordTable';
import SystemCreditsRecordTable from '../../containers/systemRecordTables/SystemCreditsRecordTable';
import SystemStocksRecordTable from '../../containers/systemRecordTables/SystemStocksRecordTable';
import SystemSeachDialog from '../../containers/systemDialogs/SystemSearchDialog';
import SystemRecordsDetailsDialog from '../../containers/systemDialogs/SystemRecordsDetailsDialog';
import SystemPaymentDialog from './../../containers/systemDialogs/SystemPaymentDialog';
import styles from '../../constants/styles';

class SalesCreditStockPage extends React.Component {
    render() {
        return (
            <div style={styles.page.mainNoLogo}>
                <SystemSeachDialog />
                <SystemRecordsDetailsDialog />
                <SystemPaymentDialog />

                <TabsContainer colored fixed slideHeightProp="minHeight">
                <Tabs tabId="Sales_Credit_Stock_Page">
                    <Tab label="Sales" onClick={this.props.onSalesTabClick}>
                        <SystemSalesRecordTable />
                    </Tab>
                    <Tab label="Credit" onClick={this.props.onCreditTabClick}>
                        <SystemCreditsRecordTable />
                    </Tab>
                    <Tab label="Stock" onClick={this.props.onStockTabClick}>
                        <SystemStocksRecordTable />
                    </Tab>
                </Tabs>
                </TabsContainer>
                    
                <Button floating primary style={styles.floatingButton.left} onClick={this.props.onBackButtonClick}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.props.onSearchButtonClick}>
                    search
                </Button>
            </div>
        );
    }
}

SalesCreditStockPage.propTypes = {
    onSalesTabClick: PropTypes.func.isRequired,
    onCreditTabClick: PropTypes.func.isRequired,
    onStockTabClick: PropTypes.func.isRequired,
    onSearchButtonClick: PropTypes.func.isRequired,
    onBackButtonClick: PropTypes.func.isRequired
};

export default SalesCreditStockPage;