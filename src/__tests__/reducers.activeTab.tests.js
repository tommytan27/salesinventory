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
    it('should return ITEM_RECORD when receiving CHANGE_TAB_SALES_RECORD action', () => {
        expect(activeTab(undefined, {
            type: actionTypes.CHANGE_TAB_SALES_RECORD
        })).toBe(tabOptions.SALES_RECORD);
    });
    it('should return ITEM_RECORD when receiving CHANGE_TAB_CREDIT_RECORD action', () => {
        expect(activeTab(undefined, {
            type: actionTypes.CHANGE_TAB_CREDIT_RECORD
        })).toBe(tabOptions.CREDIT_RECORD);
    });
    it('should return ITEM_RECORD when receiving CHANGE_TAB_STOCK_RECORD action', () => {
        expect(activeTab(undefined, {
            type: actionTypes.CHANGE_TAB_STOCK_RECORD
        })).toBe(tabOptions.STOCK_RECORD);
    });
});