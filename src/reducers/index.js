import { combineReducers } from "redux";
import users from './users';
import selectedRecord from './selectedRecord';
import dialogs from './dialogs';

const salesInventoryApp = combineReducers({
    users,
    selectedRecord,
    dialogs
});

export default salesInventoryApp;