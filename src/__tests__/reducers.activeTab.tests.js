import activeTab from "../reducers/activeTab";
import actionTypes from "../constants/actionTypes";
import tabOptions from "../constants/tabOptions";

describe('ActiveTab', () => {
    it('should return SUPPLIER_RECORD when receiving CHANGE_TAB_SUPPLIER_RECORD action', () => {
        expect(activeTab(undefined, {
            type: actionTypes.CHANGE_TAB_SUPPLIER_RECORD
        })).toBe(tabOptions.SUPPLIER_RECORD);
    });
    it('should return BRAND_RECORD when receiving CHANGE_TAB_BRAND_RECORD action', () => {
        expect(activeTab(undefined, {
            type: actionTypes.CHANGE_TAB_BRAND_RECORD
        })).toBe(tabOptions.BRAND_RECORD);
    });
    it('should return ITEM_RECORD when receiving CHANGE_TAB_ITEM_RECORD action', () => {
        expect(activeTab(undefined, {
            type: actionTypes.CHANGE_TAB_ITEM_RECORD
        })).toBe(tabOptions.ITEM_RECORD);
    });
});