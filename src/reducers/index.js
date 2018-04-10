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
import selectCustomerDialogs from './dialogs/selectCustomerDialogs';
import recordsDetailsDialogs from './dialogs/recordsDetailsDialogs';
import stockShopRecords from './records/stockShopRecords';
import itemSelectionForm from './forms/itemSelectionForm';
import activePage from './activePage';
import activeTab from './activeTab';
import activeMode from './activeMode';
import activeAdmin from './activeAdmin';
import activeCustomer from './activeCustomer';
import paymentDialogs from './dialogs/paymentDialogs';

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
    stockShopRecords,
    searchDialogs,
    loginDialogs,
    selectCustomerDialogs,
    recordsDetailsDialogs,
    itemSelectionForm,
    paymentDialogs,
    activePage,
    activeTab,
    activeMode,
    activeAdmin,
    activeCustomer
});

export default salesInventoryApp;