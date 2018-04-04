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
import credits from './records/credits';
import stocks from './records/stocks';
import searchDialogs from './dialogs/searchDialogs';
import loginDialogs from './dialogs/loginDialogs';
import recordsDetailsDialogs from './dialogs/recordsDetailsDialogs';
import stockingRecords from './records/stockingRecords';
import itemSelectionForm from './forms/itemSelectionForm';
import activePage from './activePage';
import activeTab from './activeTab';
import activeMode from './activeMode';
import activeAdmin from './activeAdmin';

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
    credits,
    stocks,
    stockingRecords,
    searchDialogs,
    loginDialogs,
    recordsDetailsDialogs,
    itemSelectionForm,
    activePage,
    activeTab,
    activeMode,
    activeAdmin
});

export default salesInventoryApp;