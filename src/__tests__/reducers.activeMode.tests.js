import activeMode from "../reducers/activeMode";
import actionTypes from "../constants/actionTypes";
import modeOptions from "../constants/modeOptions";

describe('activeMode', () => {
    it('should return USER_MODE initially', () => {
        expect(activeMode(undefined, {})).toBe(modeOptions.USER_MODE);
    });
    it('should return ADMIN_MODE when receiving CHANGE_MODE_ADMIN action', () => {
        expect(activeMode(modeOptions.USER_MODE, {
            type: actionTypes.CHANGE_MODE_ADMIN
        })).toBe(modeOptions.ADMIN_MODE);
    });
    it('should return USER_MODE when receiving CHANGE_MODE_USER action', () => {
        expect(activeMode(modeOptions.ADMIN_MODE, {
            type: actionTypes.CHANGE_MODE_USER
        })).toBe(modeOptions.USER_MODE);
    });
    it('should return USER_MODE when receiving CHANGE_MODE_USER_DUE_TIMEOUT action', () => {
        expect(activeMode(modeOptions.ADMIN_MODE, {
            type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
        })).toBe(modeOptions.USER_MODE);
    });
});