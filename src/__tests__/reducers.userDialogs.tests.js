
import userDialogs from './../reducers/userDialogs';
import actionTypes from './../constants/actionTypes';

describe('UserDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        expect(userDialogs(undefined, {}).addUser.open).toBeFalsy();
        expect(userDialogs(undefined, {}).editUser.open).toBeFalsy();
    });
    it('should return add user dialog opened when receiving OPEN_ADD_USER_DIALOG action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }).addUser.open).toBeTruthy();
    });
    it('should return edit user dialog opened when receiving OPEN_EDIT_USER_DIALOG action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG
        }).editUser.open).toBeTruthy();
    });
    it('should return add user dialog opened after closed when receiving OPEN_ADD_USER_DIALOG action', () => {
        expect(userDialogs({
            addUser: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }).addUser.open).toBeTruthy();
    });
    it('should return edit user dialog opened after closed when receiving OPEN_EDIT_USER_DIALOG action', () => {
        expect(userDialogs({
            editUser: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG
        }).editUser.open).toBeTruthy();
    });
    it('should return add user dialog closed when receiving CLOSE_ADD_USER_DIALOG action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.CLOSE_ADD_USER_DIALOG
        }).addUser.open).toBeFalsy();
    });
    it('should return edit user dialog closed when receiving CLOSE_EDIT_USER_DIALOG action', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        }).editUser.open).toBeFalsy();
    });
    it('should return add user dialog closed after opened when receiving CLOSE_ADD_USER_DIALOG action', () => {
        expect(userDialogs({
            addUser: {
                open: true
            }
        }, {
            type: actionTypes.CLOSE_ADD_USER_DIALOG
        }).addUser.open).toBeFalsy();
    });
    it('should return edit user dialog closed after opened when receiving CLOSE_EDIT_USER_DIALOG action', () => {
        expect(userDialogs({
            editUser: {
                open: true
            }
        }, {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        }).editUser.open).toBeFalsy();
    });
});