import activeAdmin from "../reducers/activeAdmin";
import actionTypes from "../constants/actionTypes";

describe('activeAdmin', () => {
    it('should return null user initially', () => {
        expect(activeAdmin(undefined, {}).username).toBeNull();
        expect(activeAdmin(undefined, {}).timeout).toBeNull();
    });
    it('should return the active admin when receiving CHANGE_MODE_ADMIN action', () => {
        var expectedUsername = "admin";
        var expectedTimeout = 15;
        var returnValues = activeAdmin(undefined, {
            type: actionTypes.CHANGE_MODE_ADMIN,
            username: expectedUsername,
            timeout: expectedTimeout
        });
        expect(returnValues.username).toEqual(expectedUsername);
        expect(returnValues.timeout).toEqual(expectedTimeout);
    });
    it('should return initial state when receiving CHANGE_MODE_USER action', () => {
        var returnValues = activeAdmin({username: "admin", timeout: 8}, {
            type: actionTypes.CHANGE_MODE_USER
        });
        expect(returnValues.username).toBeNull();
        expect(returnValues.timeout).toBeNull();
    });
    it('should return initial state when receiving CHANGE_MODE_USER_DUE_TIMEOUT action', () => {
        var returnValues = activeAdmin({username: "admin", timeout: 8}, {
            type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
        });
        expect(returnValues.username).toBeNull();
        expect(returnValues.timeout).toBeNull();
    });
});