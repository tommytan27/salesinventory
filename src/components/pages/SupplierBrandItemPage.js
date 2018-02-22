import React from 'react';
import { TabsContainer, Tabs, Tab, Button } from 'react-md';
import SystemSupplierRecordTable from './../../containers/systemRecordTables/SystemSupplierRecordTable';
import SystemBrandRecordTable from './../../containers/systemRecordTables/SystemBrandRecordTable';
import SystemItemRecordTable from './../../containers/systemRecordTables/SystemItemRecordTable';
import SystemSupplierDialog from '../../containers/systemDialogs/SystemSupplierDialog';
import SystemBrandDialog from '../../containers/systemDialogs/SystemBrandDialog';
import SystemItemDialog from '../../containers/systemDialogs/SystemItemDialog';
import styles from '../../constants/styles';
import tabOptions from '../../constants/tabOptions';

class SupplierBrandItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick = () => {
        switch (this.props.activeTab) {
            case tabOptions.SUPPLIER_RECORD:
                this.props.onAddSupplierClick();
                break;
            case tabOptions.BRAND_RECORD:
                this.props.onAddBrandClick();
                break;
            case tabOptions.ITEM_RECORD:
                this.props.onAddItemClick();
                break;
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
                        <SystemItemRecordTable />
                    </Tab>
                </Tabs>
                </TabsContainer>
              
                <SystemSupplierDialog /> 
                <SystemBrandDialog />
                <SystemItemDialog />
                    
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.handleAddButtonClick}>
                    add
                </Button>
            </div>
        );
    }
}

export default SupplierBrandItemPage;