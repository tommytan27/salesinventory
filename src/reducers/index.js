import { combineReducers } from "redux";
import users from './users';
import selectedRecord from './selectedRecord';
import userDialogs from './userDialogs';

const salesInventoryApp = combineReducers({
    users,
    selectedRecord,
    userDialogs
});

export default salesInventoryApp;