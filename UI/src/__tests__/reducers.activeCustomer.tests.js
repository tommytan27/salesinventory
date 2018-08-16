import activeCustomer from "../reducers/activeCustomer";
import actionTypes from "../constants/actionTypes";

describe('activeCustomer', () => {
    it('should return anonymous customer initially', () => {
        expect(activeCustomer(undefined, {}).id).toEqual(0);
    });
    it('should return the anonymous when receiving CHANGE_PAGE_USER_MAIN_MENU action', () => {
        var returnValues = activeCustomer({id: 1}, {
            type: actionTypes.CHANGE_PAGE_USER_MAIN_MENU
        });
        expect(returnValues.id).toEqual(0);
    });
    it('should return the anonymous when receiving SELECT_ANONYMOUS action', () => {
        var returnValues = activeCustomer({id: 1}, {
            type: actionTypes.SELECT_ANONYMOUS
        });
        expect(returnValues.id).toEqual(0);
    });
    it('should return selected customer when receiving SELECT_CUSTOMER action', () => {
        var returnValues = activeCustomer(undefined, {
            type: actionTypes.SELECT_CUSTOMER,
            customerId: 2
        });
        expect(returnValues.id).toEqual(2);
    });
});