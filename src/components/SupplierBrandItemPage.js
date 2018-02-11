import React from 'react';
import { TabsContainer, Tabs, Tab, Button } from 'react-md';
import SystemSupplierRecordTable from './../containers/SystemSupplierRecordTable';
import SystemBrandRecordTable from './../containers/SystemBrandRecordTable';
import SystemSupplierDialog from '../containers/SystemSupplierDialog';
import styles from '../constants/styles';
import tabOptions from '../constants/tabOptions';
import SystemBrandDialog from '../containers/SystemBrandDialog';

class SupplierBrandItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick = () => {
        switch (this.props.activeTab) {
            case tabOptions.SUPPLIER_RECORD:
                this.props.onAddSupplierClick();
            case tabOptions.BRAND_RECORD:
                this.props.onAddBrandClick();
        }
    }

    render() {
        return (
            <div>
                <TabsContainer colored fixed slideHeightProp="minHeight">
                <Tabs tabId="Supplier_Brand_Item_Tabs">
                    <Tab label="Suppliers" onClick={this.props.onSupplierTabClick}>
                        <SystemSupplierRecordTable />
                    </Tab>
                    <Tab label="Brands" onClick={this.props.onBrandTabClick}>
                        <SystemBrandRecordTable />
                    </Tab>
                    <Tab label="Items" onClick={this.props.onItemTabClick}>
                    </Tab>
                </Tabs>
                </TabsContainer>
              
                <SystemSupplierDialog /> 
                <SystemBrandDialog />
                    
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.handleAddButtonClick}>
                    add
                </Button>
            </div>
        );
    }
}

export default SupplierBrandItemPage;