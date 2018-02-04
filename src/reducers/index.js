import { combineReducers } from "redux";
import users from './users';
import userDialogs from './userDialogs';
import customers from './customers';
import customerDialogs from './customerDialogs';
import suppliers from './suppliers';

const salesInventoryApp = combineReducers({
    users,
    userDialogs,
    customers,
    customerDialogs,
    suppliers
});

export default salesInventoryApp;