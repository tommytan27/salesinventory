const actionTypes = {
    OPEN_ADD_USER_DIALOG: 'OPEN_ADD_USER_DIALOG',
    OPEN_EDIT_USER_DIALOG: 'OPEN_EDIT_USER_DIALOG',
    CLOSE_USER_DIALOG: 'CLOSE_USER_DIALOG',
    UPDATE_USERNAME_FIELD: 'UPDATE_USERNAME_FIELD',
    UPDATE_TIMEOUT_FIELD: 'UPDATE_TIMEOUT_FIELD',
    UPDATE_PASSWORD_FIELD: 'UPDATE_PASSWORD_FIELD',
    UPDATE_CONFIRM_PASSWORD_FIELD: 'UPDATE_CONFIRM_PASSWORD_FIELD',
    ADD_USER: 'ADD_USER',
    SAVE_USER: 'SAVE_USER',
    DELETE_USER: 'DELETE_USER',

    OPEN_ADD_CUSTOMER_DIALOG: 'OPEN_ADD_CUSTOMER_DIALOG',
    OPEN_EDIT_CUSTOMER_DIALOG: 'OPEN_EDIT_CUSTOMER_DIALOG',
    CLOSE_CUSTOMER_DIALOG: 'CLOSE_CUSTOMER_DIALOG',
    UPDATE_FIRSTNAME_FIELD: 'UPDATE_FIRSTNAME_FIELD',
    UPDATE_LASTNAME_FIELD: 'UPDATE_LASTNAME_FIELD',
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    SAVE_CUSTOMER: 'SAVE_CUSTOMER',
    DELETE_CUSTOMER: 'DETELET_CUSTOMER',

    OPEN_ADD_SUPPLIER_DIALOG: 'OPEN_ADD_SUPPLIER_DIALOG',
    OPEN_EDIT_SUPPLIER_DIALOG: 'OPEN_EDIT_SUPPLIER_DIALOG',
    CLOSE_SUPPLIER_DIALOG: 'CLOSE_SUPPLIER_DIALOG',
    UPDATE_SUPPLIER_NAME_FIELD: 'UPDATE_SUPPLIER_NAME_FIELD',
    ADD_SUPPLIER: 'ADD_SUPPLIER',
    SAVE_SUPPLIER: 'SAVE_SUPPLIER',
    DELETE_SUPPLIER: 'DELETE_SUPPLIER',

    OPEN_ADD_BRAND_DIALOG: 'OPEN_ADD_BRAND_DIALOG',
    OPEN_EDIT_BRAND_DIALOG: 'OPEN_EDIT_BRAND_DIALOG',
    CLOSE_BRAND_DIALOG: 'CLOSE_BRAND_DIALOG',
    UPDATE_BRAND_NAME_FIELD: 'UPDATE_BRAND_NAME_FIELD',
    ADD_BRAND: 'ADD_BRAND',
    SAVE_BRAND: 'SAVE_BRAND',
    DELETE_BRAND: 'DELETE_BRAND',

    OPEN_ADD_ITEM_DIALOG: 'OPEN_ADD_ITEM_DIALOG',
    OPEN_EDIT_ITEM_DIALOG: 'OPEN_EDIT_ITEM_DIALOG',
    CLOSE_ITEM_DIALOG: 'CLOSE_ITEM_DIALOG',
    UPDATE_ITEM_NAME_FIELD: 'UPDATE_ITEM_NAME_FIELD',
    UPDATE_BARCODE_FIELD: 'UPDATE_BARCODE_FIELD',
    UPDATE_SELL_PRICE_FIELD: 'UPDATE_SELL_PRICE_FIELD',
    UPDATE_COST_PRICE_FIELD: 'UPDATE_COST_PRICE_FIELD',
    UPDATE_QTY_FIELD: 'UPDATE_QTY_FIELD',
    TOGGLE_VEGAN_FLAG: 'TOGGLE_VEGAN_FLAG',
    SELECT_SUPPLIER: 'SELECT_SUPPLIER',
    SELECT_BRAND: 'SELECT_BRAND',
    SELECT_ITEM: 'SELECT_ITEM',
    ADD_ITEM: 'ADD_ITEM',
    SAVE_ITEM: 'SAVE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',

    ENABLE_EDITABLE: 'ENABLE_EDITABLE',
    UPDATE_CONTACT_FIELD: 'UPDATE_CONTACT_FIELD',

    OPEN_SEARCH_DIALOG: 'OPEN_SEARCH_DIALOG',
    CLOSE_SEARCH_DIALOG: 'CLOSE_SEARCH_DIALOG',
    UPDATE_FROM_DATE_FIELD: 'UPDATE_FROM_DATE_FIELD',
    UPDATE_TO_DATE_FIELD: 'UPDATE_TO_DATE_FIELD',
    UPDATE_CUSTOMER_COMBO: 'UPDATE_CUSTOMER_COMBO',
    
    OPEN_LOGIN_DIALOG: 'OPEN_LOGIN_DIALOG',
    CLOSE_LOGIN_DIALOG: 'CLOSE_LOGIN_DIALOG',
    
    OPEN_SELECT_CUSTOMER_DIALOG: 'OPEN_SELECT_CUSTOMER_DIALOG',
    CLOSE_SELECT_CUSTOMER_DIALOG: 'CLOSE_SELECT_CUSTOMER_DIALOG',

    OPEN_RECORDS_DETAILS_DIALOG: 'OPEN_RECORDS_DETAILS_DIALOG',
    CLOSE_RECORDS_DETAILS_DIALOG: 'CLOSE_RECORDS_DETAILS_DIALOG',

    UPDATE_RECORDS: 'UPDATE_RECORDS',

    CHANGE_TAB_SUPPLIER_RECORD: 'CHANGE_TAB_SUPPLIER_RECORD',
    CHANGE_TAB_BRAND_RECORD: 'CHANGE_TAB_BRAND_RECORD',
    CHANGE_TAB_ITEM_RECORD: 'CHANGE_TAB_ITEM_RECORD',
    CHANGE_TAB_SALES_RECORD: 'CHANGE_TAB_SALES_RECORD',
    CHANGE_TAB_CREDIT_RECORD: 'CHANGE_TAB_CREDIT_RECORD',
    CHANGE_TAB_STOCK_RECORD: 'CHANGE_TAB_STOCK_RECORD',

    ADD_STOCKING_RECORD_TO_LIST: 'ADD_STOCKING_RECORD_TO_LIST',
    REMOVE_STOCKING_RECORD_FROM_LIST: 'REMOVE_STOCKING_RECORD_FROM_LIST',

    SELECT_ITEM_AND_ADD: 'SELECT_ITEM_AND_ADD',

    INITIATE_BARCODE_SCANNING: 'INITIATE_BARCODE_SCANNING',
    
    CHANGE_PAGE_ADMIN_MAIN_MENU: 'CHANGE_PAGE_ADMIN_MAIN_MENU',
    CHANGE_PAGE_ADMIN_USER_RECORDS: 'CHANGE_PAGE_ADMIN_USER_RECORDS',
    CHANGE_PAGE_ADMIN_CUSTOMER_RECORDS: 'CHANGE_PAGE_ADMIN_CUSTOMER_RECORDS',
    CHANGE_PAGE_ADMIN_PRODUCTS_PAGE: 'CHANGE_PAGE_ADMIN_PRODUCTS_PAGE',
    CHANGE_PAGE_ADMIN_STOCKING_PAGE: 'CHANGE_PAGE_ADMIN_STOCKING_PAGE',
    CHANGE_PAGE_ADMIN_RECORDS_HISTORY: 'CHANGE_PAGE_ADMIN_RECORDS_HISTORY',

    CHANGE_PAGE_USER_MAIN_MENU: 'CHANGE_PAGE_USER_MAIN_MENU',
    CHANGE_PAGE_USER_SHOPPING_PAGE: 'CHANGE_PAGE_USER_SHOPPING_PAGE',

    CHANGE_MODE_ADMIN: 'CHANGE_MODE_ADMIN',
    CHANGE_MODE_USER: 'CHANGE_MODE_USER',    
    CHANGE_MODE_USER_DUE_TIMEOUT: 'CHANGE_MODE_USER_DUE_TIMEOUT',

    SHOW_SHOPPING_FORM: 'SHOW_SHOPPING_FORM',

    SELECT_CUSTOMER: 'SELECT_CUSTOMER',
    SELECT_ANONYMOUS: 'SELECT_ANONYMOUS',
    
    OPEN_PAYMENT_DIALOG: 'OPEN_PAYMENT_DIALOG',
    CLOSE_PAYMENT_DIALOG: 'CLOSE_PAYMENT_DIALOG',
    PAY_NOW: 'PAY_NOW',
    PAY_CASH: 'PAY_CASH',
    CHANGE_TAKEN: 'CHANGE_TAKEN',
    UPDATE_CASH_FIELD: 'UPDATE_CASH_FIELD',

    OPEN_PRICE_CHECK_DIALOG: 'OPEN_PRICE_CHECK_DIALOG',
    CLOSE_PRICE_CHECK_DIALOG: 'CLOSE_PRICE_CHECK_DIALOG',

    ADD_SALES: 'ADD_SALES',
    ADD_CREDIT: 'ADD_CREDIT',
    ADD_STOCK: 'ADD_STOCK',
    
    FAIL_LOGIN_USER: 'FAIL_LOGIN_USER',
    FAIL_ADD_USER: 'FAIL_ADD_USER',
    FAIL_SAVE_USER: 'FAIL_SAVE_USER',
    FAIL_ADD_CUSTOMER: 'FAIL_ADD_CUSTOMER',
    FAIL_SAVE_CUSTOMER: 'FAIL_SAVE_CUSTOMER',
    FAIL_ADD_SUPPLIER: 'FAIL_ADD_SUPPLIER',
    FAIL_SAVE_SUPPLIER: 'FAIL_SAVE_SUPPLIER',
    FAIL_ADD_BRAND: 'FAIL_ADD_BRAND',
    FAIL_SAVE_BRAND: 'FAIL_SAVE_BRAND',
    FAIL_ADD_ITEM: 'FAIL_ADD_ITEM',
    FAIL_SAVE_ITEM: 'FAIL_SAVE_ITEM',
    
    UPDATE_USERS: 'UPDATE_USERS',

    SERVER_GET_USERS: 'SERVER_GET_USERS',

    SERVER_LOGIN_USER: 'SERVER_LOGIN_USER',
    SERVER_ADD_USER: 'SERVER_ADD_USER',
    SERVER_SAVE_USER: 'SERVER_SAVE_USER',
    SERVER_DELETE_USER: 'SERVER_DELETE_USER',
    SERVER_ADD_CUSTOMER: 'SERVER_ADD_CUSTOMER',
    SERVER_SAVE_CUSTOMER: 'SERVER_SAVE_CUSTOMER',
    SERVER_DELETE_CUSTOMER: 'SERVER_DELETE_CUSTOMER',
    SERVER_ADD_SUPPLIER: 'SERVER_ADD_SUPPLIER',
    SERVER_SAVE_SUPPLIER: 'SERVER_SAVE_SUPPLIER',
    SERVER_DELETE_SUPPLIER: 'SERVER_DELETE_SUPPLIER',
    SERVER_ADD_BRAND: 'SERVER_ADD_BRAND',
    SERVER_SAVE_BRAND: 'SERVER_SAVE_BRAND',
    SERVER_DELETE_BRAND: 'SERVER_DELETE_BRAND',
    SERVER_ADD_ITEM: 'SERVER_ADD_ITEM',
    SERVER_SAVE_ITEM: 'SERVER_SAVE_ITEM',
    SERVER_DELETE_ITEM: 'SERVER_DELETE_ITEM',
    SERVER_ADD_STOCK: 'SERVER_ADD_STOCK',
    SERVER_ADD_CREDIT: 'SERVER_ADD_CREDIT',
    SERVER_ADD_SALES: 'SERVER_ADD_SALES',
    SERVER_SAVE_CHANGE_AS_CUSTOMER_CREDIT: 'SERVER_SAVE_CHANGE_AS_CUSTOMER_CREDIT',
    SERVER_SEARCH_RECORDS: 'SERVER_SEARCH_RECORDS'
};

export default actionTypes;