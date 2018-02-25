import React from 'react';
import { PropTypes } from 'prop-types';
import { TabsContainer, Tabs, Tab, Button } from 'react-md';
import SystemSalesRecordTable from '../../containers/systemRecordTables/SystemSalesRecordTable';
// import SystemSupplierRecordTable from './../../containers/systemRecordTables/SystemSupplierRecordTable';
// import SystemBrandRecordTable from './../../containers/systemRecordTables/SystemBrandRecordTable';
// import SystemItemRecordTable from './../../containers/systemRecordTables/SystemItemRecordTable';
// import SystemSupplierDialog from '../../containers/systemDialogs/SystemSupplierDialog';
// import SystemBrandDialog from '../../containers/systemDialogs/SystemBrandDialog';
// import SystemItemDialog from '../../containers/systemDialogs/SystemItemDialog';
import styles from '../../constants/styles';
import tabOptions from '../../constants/tabOptions';

class SalesCreditStockPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchClick = () => {
        // switch (this.props.activeTab) {
        //     case tabOptions.SUPPLIER_RECORD:
        //         this.props.onAddSupplierClick();
        //         break;
        //     case tabOptions.BRAND_RECORD:
        //         this.props.onAddBrandClick();
        //         break;
        //     case tabOptions.ITEM_RECORD:
        //         this.props.onAddItemClick();
        //         break;
        // }
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
              
                {/* <SystemSupplierDialog /> 
                <SystemBrandDialog />
                <SystemItemDialog /> */}
                    
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.handleSearchClick}>
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
    // onAddSupplierClick: PropTypes.func.isRequired,
    // onAddBrandClick: PropTypes.func.isRequired,
    // onAddItemClick: PropTypes.func.isRequired
};

export default SalesCreditStockPage;