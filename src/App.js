import React from 'react';
import './App.css';
import SystemSupplierBrandItemPage from './containers/systemPages/SystemSupplierBrandItemPage';
import SystemUserRecordTable from './containers/systemRecordTables/SystemUserRecordTable';
import SystemCustomerRecordTable from './containers/systemRecordTables/SystemCustomerRecordTable';
import SystemSalesRecordTable from './containers/systemRecordTables/SystemSalesRecordTable';

const App = () => (
  <SystemSalesRecordTable />
  // <SystemSupplierBrandItemPage />
  // <SystemUserRecordTable />
  // <SystemCustomerRecordTable />
);

export default App;
