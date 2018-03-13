import React from 'react';
import './App.css';
import SystemUserRecordTable from './containers/systemRecordTables/SystemUserRecordTable';
import SystemCustomerRecordTable from './containers/systemRecordTables/SystemCustomerRecordTable';
import SystemSupplierBrandItemPage from './containers/systemPages/SystemSupplierBrandItemPage';
import SystemSalesCreditStockPage from './containers/systemPages/SystemSalesCreditStockPage';

const App = () => (
  <SystemSalesCreditStockPage />
  // <SystemSupplierBrandItemPage />
  // <SystemUserRecordTable />
  // <SystemCustomerRecordTable />
);

export default App;
