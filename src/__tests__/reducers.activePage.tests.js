import activePage from "../reducers/activePage";
import actionTypes from "../constants/actionTypes";
import pageOptions from "../constants/pageOptions";

describe('ActivePage', () => {
    it('should return ADMIN_MAIN_MENU when receiving CHANGE_PAGE_ADMIN_MAIN_MENU action', () => {
        expect(activePage(undefined, {
            type: actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU
        })).toBe(pageOptions.ADMIN_MAIN_MENU);
    });
    it('should return ADMIN_USER_RECORDS when receiving CHANGE_PAGE_ADMIN_USER_RECORDS action', () => {
        expect(activePage(undefined, {
            type: actionTypes.CHANGE_PAGE_ADMIN_USER_RECORDS
        })).toBe(pageOptions.ADMIN_USER_RECORDS);
    });
    it('should return ADMIN_CUSTOMER_RECORDS when receiving CHANGE_PAGE_ADMIN_CUSTOMER_RECORDS action', () => {
        expect(activePage(undefined, {
            type: actionTypes.CHANGE_PAGE_ADMIN_CUSTOMER_RECORDS
        })).toBe(pageOptions.ADMIN_CUSTOMER_RECORDS);
    });
    it('should return ADMIN_PRODUCTS_PAGE when receiving CHANGE_PAGE_ADMIN_PRODUCTS_PAGE action', () => {
        expect(activePage(undefined, {
            type: actionTypes.CHANGE_PAGE_ADMIN_PRODUCTS_PAGE
        })).toBe(pageOptions.ADMIN_PRODUCTS_PAGE);
    });
    it('should return ADMIN_STOCKING_PAGE when receiving CHANGE_PAGE_ADMIN_STOCKING_PAGE action', () => {
        expect(activePage(undefined, {
            type: actionTypes.CHANGE_PAGE_ADMIN_STOCKING_PAGE
        })).toBe(pageOptions.ADMIN_STOCKING_PAGE);
    });
    it('should return ADMIN_RECORDS_HISTORY when receiving CHANGE_PAGE_ADMIN_RECORDS_HISTORY action', () => {
        expect(activePage(undefined, {
            type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
        })).toBe(pageOptions.ADMIN_RECORDS_HISTORY);
    });
});