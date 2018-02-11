import React from 'react';
import { TabsContainer, Tabs, Tab, Button } from 'react-md';
import SystemSupplierRecordTable from './../containers/SystemSupplierRecordTable';
import SystemSupplierDialog from '../containers/SystemSupplierDialog';
import styles from '../constants/styles';
import tabOptions from '../constants/tabOptions';

class SupplierBrandItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick = () => {
        if (this.props.activeTab === tabOptions.SUPPLIER_RECORD) {
            this.props.onAddSupplierClick();
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
                    </Tab>
                    <Tab label="Items" onClick={this.props.onItemTabClick}>
                    </Tab>
                </Tabs>
                </TabsContainer>
              
                <SystemSupplierDialog /> 
                    
                <Button floating primary style={styles.floatingButton.left}>navigate_before</Button>
                <Button floating primary style={styles.floatingButton.right} onClick={this.handleAddButtonClick}>
                    add
                </Button>
            </div>
        );
    }
}

export default SupplierBrandItemPage;