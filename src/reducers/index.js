import { combineReducers } from "redux";
import users from './users';
import userDialogs from './userDialogs';

const salesInventoryApp = combineReducers({
    users,
    userDialogs
});

export default salesInventoryApp;