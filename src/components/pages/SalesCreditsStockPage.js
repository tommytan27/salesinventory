import React from 'react';
import { PropTypes } from 'prop-types';
import { TabsContainer, Tabs, Tab, Button } from 'react-md';
import SystemSalesRecordTable from '../../containers/systemRecordTables/SystemSalesRecordTable';
import SystemSeachDialog from '../../containers/systemDialogs/SystemSearchDialog';
import SystemRecordsDetailsDialog from '../../containers/systemDialogs/SystemRecordsDetailsDialog';
import styles from '../../constants/styles';
import tabOptions from '../../constants/tabOptions';

class SalesCreditStockPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TabsContainer colored fixed slideHeightProp="minHeight">
                <Tabs tabId="Sales_Credit_Stock_Page">
                    <Tab label="Sales" onClick={this.props.onSalesTabClick}>
                        <SystemSalesRecordTable />
                    </Tab>
                    <Tab label="Credit" onClick={this.props.onCreditTabClick}>
                        {/* <SystemBrandRecordTable /> */}
                    </Tab>
                    <Tab label="Stock" onClick={this.props.onStockTabClick}>
                        {/* <SystemItemRecordTable /> */}
                    </Tab>
                </Tabs>
                </TabsContainer>
              
                <SystemSeachDialog />
                <SystemRecordsDetailsDialog />
                    
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.props.onSearchButtonClick}>
                    search
                </Button>
            </div>
        );
    }
}

SalesCreditStockPage.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onSalesTabClick: PropTypes.func.isRequired,
    onCreditTabClick: PropTypes.func.isRequired,
    onStockTabClick: PropTypes.func.isRequired,
    onSearchButtonClick: PropTypes.func.isRequired
    // onAddSupplierClick: PropTypes.func.isRequired,
    // onAddBrandClick: PropTypes.func.isRequired,
    // onAddItemClick: PropTypes.func.isRequired
};

export default SalesCreditStockPage;