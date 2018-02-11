import { combineReducers } from "redux";
import users from './users';
import userDialogs from './userDialogs';
import customers from './customers';
import customerDialogs from './customerDialogs';
import suppliers from './suppliers';
import supplierDialogs from './supplierDialogs';
import activeTab from './activeTab';

const salesInventoryApp = combineReducers({
    users,
    userDialogs,
    customers,
    customerDialogs,
    suppliers,
    supplierDialogs,
    activeTab
});

export default salesInventoryApp;