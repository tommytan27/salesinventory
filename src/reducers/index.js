import { combineReducers } from "redux";
import users from './records/users';
import userDialogs from './dialogs/userDialogs';
import customers from './records/customers';
import customerDialogs from './dialogs/customerDialogs';
import suppliers from './records/suppliers';
import supplierDialogs from './dialogs/supplierDialogs';
import brands from './records/brands';
import brandDialogs from './dialogs/brandDialogs';
import items from './records/items';
import itemDialogs from './dialogs/itemDialogs';
import sales from './records/sales';
import activeTab from './activeTab';

const salesInventoryApp = combineReducers({
    users,
    userDialogs,
    customers,
    customerDialogs,
    suppliers,
    supplierDialogs,
    brands,
    brandDialogs,
    items,
    itemDialogs,
    sales,
    activeTab
});

export default salesInventoryApp;