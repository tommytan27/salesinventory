
import dialogs from './../reducers/dialogs';
import actionTypes from './../constants/actionTypes';

describe('Dialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        expect(dialogs(undefined, {}).editUser.open).toBeFalsy();
    });    
    it('should return edit user dialog opened when receiving OPEN_EDIT_USER_DIALOG action', () => {
        expect(dialogs(undefined, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG
        }).editUser.open).toBeTruthy();
    });
    it('should return edit user dialog opened after closed when receiving OPEN_EDIT_USER_DIALOG action', () => {
        expect(dialogs({
            editUser: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG
        }).editUser.open).toBeTruthy();
    });
    it('should return edit user dialog closed when receiving CLOSE_EDIT_USER_DIALOG action', () => {
        expect(dialogs(undefined, {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        }).editUser.open).toBeFalsy();
    });
    it('should return edit user dialog closed after opened when receiving CLOSE_EDIT_USER_DIALOG action', () => {
        expect(dialogs({
            editUser: {
                open: true
            }
        }, {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        }).editUser.open).toBeFalsy();
    });
});