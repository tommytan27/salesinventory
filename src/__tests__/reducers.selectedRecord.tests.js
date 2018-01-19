import selectedRecord from './../reducers/selectedRecord';
import actionTypes from './../constants/actionTypes';

describe('SelectedRecord Store', () => {
    it('should return initial state of user 0', () => {
        expect(selectedRecord(undefined, {}).user).toBe(0);
    });
    it('should return selected user when receiving OPEN_EDIT_USER_DIALOG action', () => {
        const dummyUser = 123;
        expect(selectedRecord(undefined, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            userID: dummyUser
        }).user).toBe(dummyUser);
    });
});