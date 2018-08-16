import tabOptions from "../constants/tabOptions";
import actionTypes from "../constants/actionTypes";

const activeTab = (state = "", action) => {
    switch(action.type) {
        case actionTypes.CHANGE_PAGE_ADMIN_PRODUCTS_PAGE:
        case actionTypes.CHANGE_TAB_SUPPLIER_RECORD:
            return tabOptions.SUPPLIER_RECORD;
        case actionTypes.CHANGE_TAB_BRAND_RECORD:
            return tabOptions.BRAND_RECORD;
        case actionTypes.CHANGE_TAB_ITEM_RECORD:
            return tabOptions.ITEM_RECORD;
        case actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY:
        case actionTypes.CHANGE_TAB_SALES_RECORD:
            return tabOptions.SALES_RECORD;
        case actionTypes.CHANGE_TAB_CREDIT_RECORD:
            return tabOptions.CREDIT_RECORD;
        case actionTypes.CHANGE_TAB_STOCK_RECORD:
            return tabOptions.STOCK_RECORD;
        default:
            return state;
    }
}

export default activeTab;