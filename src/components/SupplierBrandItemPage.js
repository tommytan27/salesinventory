import React from 'react';
import { TabsContainer, Tabs, Tab } from 'react-md';
import SystemUserRecordTable from './../containers/SystemUserRecordTable';
import SystemCustomerRecordTable from './../containers/SystemCustomerRecordTable';
import SystemSupplierRecordTable from './../containers/SystemSupplierRecordTable';

class SupplierBrandItemPage extends React.Component {
    render() {
        return (
            <TabsContainer colored fixed slideHeightProp="minHeight">
            <Tabs tabId="Supplier_Brand_Item_Tabs">
                <Tab label="Suppliers">
                    <SystemSupplierRecordTable />
                </Tab>
                <Tab label="Brands">
                    <SystemUserRecordTable />
                </Tab>
                <Tab label="Items">
                    <SystemCustomerRecordTable />
                </Tab>
            </Tabs>
            </TabsContainer>
        );
    }
}

export default SupplierBrandItemPage;