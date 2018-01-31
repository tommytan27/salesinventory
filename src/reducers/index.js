import { combineReducers } from "redux";
import users from './users';
import userDialogs from './userDialogs';
import customers from './customers';
import customerDialogs from './customerDialogs';

const salesInventoryApp = combineReducers({
    users,
    userDialogs,
    customers,
    customerDialogs
});

export default salesInventoryApp;