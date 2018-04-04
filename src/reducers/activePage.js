import pageOptions from "../constants/pageOptions";
import actionTypes from "../constants/actionTypes";

const activePage = (state = pageOptions.USER_MAIN_MENU, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_MODE_ADMIN:
        case actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU:
            return pageOptions.ADMIN_MAIN_MENU;
        case actionTypes.CHANGE_PAGE_ADMIN_USER_RECORDS:
            return pageOptions.ADMIN_USER_RECORDS;
        case actionTypes.CHANGE_PAGE_ADMIN_CUSTOMER_RECORDS:
            return pageOptions.ADMIN_CUSTOMER_RECORDS;
        case actionTypes.CHANGE_PAGE_ADMIN_PRODUCTS_PAGE:
            return pageOptions.ADMIN_PRODUCTS_PAGE;
        case actionTypes.CHANGE_PAGE_ADMIN_STOCKING_PAGE:
            return pageOptions.ADMIN_STOCKING_PAGE;
        case actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY:
            return pageOptions.ADMIN_RECORDS_HISTORY;
        case actionTypes.CHANGE_MODE_USER:
        case actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT:
        case actionTypes.CHANGE_PAGE_USER_MAIN_MENU:
            return pageOptions.USER_MAIN_MENU;
        case actionTypes.CHANGE_PAGE_USER_SHOPPING_PAGE:
            return pageOptions.USER_SHOPPING_PAGE;
        default:
            return state;
    }
}

export default activePage;