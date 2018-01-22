import * as salesInventoryActions from './../actions';
import actionTypes from './../constants/actionTypes';

describe('SalesInventoryActions', () => {
    it('should create an action to open add user dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }
        expect(salesInventoryActions.openAddUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to close add user dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_ADD_USER_DIALOG
        }
        expect(salesInventoryActions.closeAddUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit user dialog', () => {
        const dummyUserID = 123;
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            userID: dummyUserID
        }
        expect(salesInventoryActions.openEditUserDialog(dummyUserID)).toEqual(expectedAction);
    });

    it('should create an action to close edit user dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_EDIT_USER_DIALOG
        }
        expect(salesInventoryActions.closeEditUserDialog()).toEqual(expectedAction);
    });
});