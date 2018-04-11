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

    OPEN_ADD_CUSTOMER_DIALOG: 'OPEN_ADD_CUSTOMER_DIALOG',
    OPEN_EDIT_CUSTOMER_DIALOG: 'OPEN_EDIT_CUSTOMER_DIALOG',
    CLOSE_CUSTOMER_DIALOG: 'CLOSE_CUSTOMER_DIALOG',
    UPDATE_FIRSTNAME_FIELD: 'UPDATE_FIRSTNAME_FIELD',
    UPDATE_LASTNAME_FIELD: 'UPDATE_LASTNAME_FIELD',
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    SAVE_CUSTOMER: 'SAVE_CUSTOMER',

    OPEN_ADD_SUPPLIER_DIALOG: 'OPEN_ADD_SUPPLIER_DIALOG',
    OPEN_EDIT_SUPPLIER_DIALOG: 'OPEN_EDIT_SUPPLIER_DIALOG',
    CLOSE_SUPPLIER_DIALOG: 'CLOSE_SUPPLIER_DIALOG',
    UPDATE_SUPPLIER_NAME_FIELD: 'UPDATE_SUPPLIER_NAME_FIELD',
    ADD_SUPPLIER: 'ADD_SUPPLIER',
    SAVE_SUPPLIER: 'SAVE_SUPPLIER',

    OPEN_ADD_BRAND_DIALOG: 'OPEN_ADD_BRAND_DIALOG',
    OPEN_EDIT_BRAND_DIALOG: 'OPEN_EDIT_BRAND_DIALOG',
    CLOSE_BRAND_DIALOG: 'CLOSE_BRAND_DIALOG',
    UPDATE_BRAND_NAME_FIELD: 'UPDATE_BRAND_NAME_FIELD',
    ADD_BRAND: 'ADD_BRAND',
    SAVE_BRAND: 'SAVE_BRAND',


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

    SIGNAL_R_LOGIN_USER: 'SIGNAL_R_LOGIN_USER',
    FAIL_LOGIN_USER: 'FAIL_LOGIN_USER',

    SELECT_CUSTOMER: 'SELECT_CUSTOMER',
    SELECT_ANONYMOUS: 'SELECT_ANONYMOUS',
    
    OPEN_PAYMENT_DIALOG: 'OPEN_PAYMENT_DIALOG',
    CLOSE_PAYMENT_DIALOG: 'CLOSE_PAYMENT_DIALOG',
    PAY_NOW: 'PAY_NOW',
    PAY_CASH: 'PAY_CASH',
    CHANGE_TAKEN: 'CHANGE_TAKEN',
    UPDATE_CASH_FIELD: 'UPDATE_CASH_FIELD',

    OPEN_PRICE_CHECK_DIALOG: 'OPEN_PRICE_CHECK_DIALOG',
    CLOSE_PRICE_CHECK_DIALOG: 'CLOSE_PRICE_CHECK_DIALOG'
};

export default actionTypes;