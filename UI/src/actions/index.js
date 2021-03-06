import actionTypes from './../constants/actionTypes';

export const openAddUserDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_USER_DIALOG
    };
}

export const openEditUserDialog = (user) => {
    return {
        type: actionTypes.OPEN_EDIT_USER_DIALOG,
        user: user
    };
}

export const closeUserDialog = () => {
    return {
        type: actionTypes.CLOSE_USER_DIALOG
    };
}

export const updateUsernameField = (username, allUsers) => {
    return {
        type: actionTypes.UPDATE_USERNAME_FIELD,
        username: username,
        allUsers: allUsers
    };
}

export const updateTimeoutField = (timeout) => {
    return {
        type: actionTypes.UPDATE_TIMEOUT_FIELD,
        timeout: timeout
    };
}

export const updatePasswordField = (password) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_FIELD,
        password: password
    };
}

export const updateConfirmPasswordField = (confirmPassword) => {
    return {
        type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
        confirmPassword: confirmPassword
    };
}

export const addUser = (user) => {
    return {
        type: actionTypes.ADD_USER,
        user: user
    };
}

export const saveUser = (user) => {
    return {
        type: actionTypes.SAVE_USER,
        user: user
    };
}

export const deleteUser = (userId) => {
    return {
        type: actionTypes.DELETE_USER,
        userId: userId
    };
}

export const openAddCustomerDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
    };
}

export const openEditCustomerDialog = (customer) => {
    return {
        type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
        customer: customer
    };
}

export const closeCustomerDialog = () => {
    return {
        type: actionTypes.CLOSE_CUSTOMER_DIALOG
    };
}

export const updateFirstNameField = (firstName) => {
    return {
        type: actionTypes.UPDATE_FIRSTNAME_FIELD,
        firstName: firstName
    };
}

export const updateLastNameField = (lastName) => {
    return {
        type: actionTypes.UPDATE_LASTNAME_FIELD,
        lastName: lastName
    };
}

export const addCustomer = (customer) => {
    return {
        type: actionTypes.ADD_CUSTOMER,
        customer: customer
    };
}

export const saveCustomer = (customer) => {
    return {
        type: actionTypes.SAVE_CUSTOMER,
        customer: customer
    };
}

export const deleteCustomer = (customerId) => {
    return {
        type: actionTypes.DELETE_CUSTOMER,
        customerId: customerId
    };
}

export const openAddSupplierDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_SUPPLIER_DIALOG
    };
}

export const openEditSupplierDialog = (supplier) => {
    return {
        type: actionTypes.OPEN_EDIT_SUPPLIER_DIALOG,
        supplier: supplier
    };
}

export const closeSupplierDialog = () => {
    return {
        type: actionTypes.CLOSE_SUPPLIER_DIALOG
    };
}

export const updateSupplierNameField = (name) => {
    return {
        type: actionTypes.UPDATE_SUPPLIER_NAME_FIELD,
        name: name
    };
}

export const addSupplier = (supplier) => {
    return {
        type: actionTypes.ADD_SUPPLIER,
        supplier: supplier
    };
}

export const saveSupplier = (supplier) => {
    return {
        type: actionTypes.SAVE_SUPPLIER,
        supplier: supplier
    };
}

export const deleteSupplier = (supplierId) => {
    return {
        type: actionTypes.DELETE_SUPPLIER,
        supplierId: supplierId
    };
}

export const openAddBrandDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_BRAND_DIALOG
    };
}

export const openEditBrandDialog = (brand) => {
    return {
        type: actionTypes.OPEN_EDIT_BRAND_DIALOG,
        brand: brand
    };
}

export const closeBrandDialog = () => {
    return {
        type: actionTypes.CLOSE_BRAND_DIALOG
    };
}

export const updateBrandNameField = (name) => {
    return {
        type: actionTypes.UPDATE_BRAND_NAME_FIELD,
        name: name
    };
}

export const addBrand = (brand) => {
    return {
        type: actionTypes.ADD_BRAND,
        brand: brand
    };
}

export const saveBrand = (brand) => {
    return {
        type: actionTypes.SAVE_BRAND,
        brand: brand
    };
}

export const deleteBrand = (brandId) => {
    return {
        type: actionTypes.DELETE_BRAND,
        brandId: brandId
    };
}

export const openAddItemDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_ITEM_DIALOG
    };
}

export const openEditItemDialog = (item) => {
    return {
        type: actionTypes.OPEN_EDIT_ITEM_DIALOG,
        item: item
    };
}

export const closeItemDialog = () => {
    return {
        type: actionTypes.CLOSE_ITEM_DIALOG
    };
}

export const updateItemNameField = (name) => {
    return {
        type: actionTypes.UPDATE_ITEM_NAME_FIELD,
        name: name
    };
}

export const updateBarcodeField = (barcode) => {
    return {
        type: actionTypes.UPDATE_BARCODE_FIELD,
        barcode: barcode
    };
}

export const updateSellPriceField = (price) => {
    return {
        type: actionTypes.UPDATE_SELL_PRICE_FIELD,
        price: price
    };
}

export const updateCostPriceField = (price) => {
    return {
        type: actionTypes.UPDATE_COST_PRICE_FIELD,
        price: price
    };
}

export const updateQtyField = (qty) => {
    return {
        type: actionTypes.UPDATE_QTY_FIELD,
        qty: qty
    };
}

export const selectSupplier = (supplierId) => {
    return {
        type: actionTypes.SELECT_SUPPLIER,
        supplierId: supplierId
    };
}

export const selectBrand = (brandId) => {
    return {
        type: actionTypes.SELECT_BRAND,
        brandId: brandId
    };
}

export const selectItem = (barcode, items) => {
    return {
        type: actionTypes.SELECT_ITEM,
        barcode: barcode,
        items: items
    };
}

export const selectItemAndAdd = (barcode, items) => {
    return {
        type: actionTypes.SELECT_ITEM_AND_ADD,
        barcode: barcode,
        items: items
    };
}

export const toggleVeganFlag = () => {
    return {
        type: actionTypes.TOGGLE_VEGAN_FLAG
    };
}

export const addItem = (item) => {
    return {
        type: actionTypes.ADD_ITEM,
        item: item
    };
}

export const saveItem = (item) => {
    return {
        type: actionTypes.SAVE_ITEM,
        item: item
    };
}

export const deleteItem = (barcode) => {
    return {
        type: actionTypes.DELETE_ITEM,
        barcode: barcode
    };
}

export const enableEditable = () => {
    return {
        type: actionTypes.ENABLE_EDITABLE
    };
}

export const updateContactField = (contact) => {
    return {
        type: actionTypes.UPDATE_CONTACT_FIELD,
        contact: contact
    };
}

export const openLoginDialog = () => {
    return {
        type: actionTypes.OPEN_LOGIN_DIALOG
    };
}

export const closeLoginDialog = () => {
    return {
        type: actionTypes.CLOSE_LOGIN_DIALOG
    };
}

export const openSelectCustomerDialog = () => {
    return {
        type: actionTypes.OPEN_SELECT_CUSTOMER_DIALOG
    };
}

export const closeSelectCustomerDialog = () => {
    return {
        type: actionTypes.CLOSE_SELECT_CUSTOMER_DIALOG
    };
}

export const openSearchDialog = () => {
    return {
        type: actionTypes.OPEN_SEARCH_DIALOG
    };
}

export const closeSearchDialog = () => {
    return {
        type: actionTypes.CLOSE_SEARCH_DIALOG
    };
}

export const updateFromDateField = (fromDate) => {
    return {
        type: actionTypes.UPDATE_FROM_DATE_FIELD,
        fromDate: fromDate
    };
}

export const updateToDateField = (toDate) => {
    return {
        type: actionTypes.UPDATE_TO_DATE_FIELD,
        toDate: toDate
    };
}

export const updateCustomerCombo = (customerId) => {
    return {
        type: actionTypes.UPDATE_CUSTOMER_COMBO,
        customerId: customerId
    };
}

export const openRecordsDetailsDialog = (recordsDetails) => {
    return {
        type: actionTypes.OPEN_RECORDS_DETAILS_DIALOG,
        recordsDetails: recordsDetails
    }
}

export const closeRecordsDetailsDialog = () => {
    return {
        type: actionTypes.CLOSE_RECORDS_DETAILS_DIALOG
    }
}

export const updateRecords = (records) => {
    return {
        type: actionTypes.UPDATE_RECORDS,
        records: records
    }
}

export const changeTabSupplierRecord = () => {
    return {
        type: actionTypes.CHANGE_TAB_SUPPLIER_RECORD
    };
}

export const changeTabBrandRecord = () => {
    return {
        type: actionTypes.CHANGE_TAB_BRAND_RECORD
    };
}

export const changeTabItemRecord = () => {
    return {
        type: actionTypes.CHANGE_TAB_ITEM_RECORD
    };
}

export const changeTabSalesRecord = () => {
    return {
        type: actionTypes.CHANGE_TAB_SALES_RECORD
    };
}

export const changeTabCreditRecord = () => {
    return {
        type: actionTypes.CHANGE_TAB_CREDIT_RECORD
    };
}

export const changeTabStockRecord = () => {
    return {
        type: actionTypes.CHANGE_TAB_STOCK_RECORD
    };
}

export const removeStockingRecordFromList = (recordId) => {
    return {
        type: actionTypes.REMOVE_STOCKING_RECORD_FROM_LIST,
        recordId: recordId
    }
}

export const addStockingRecordToList = (item) => {
    return {
        type: actionTypes.ADD_STOCKING_RECORD_TO_LIST,
        item: item
    }
}

export const initiateBarcodeScanning = () => {
    return {
        type: actionTypes.INITIATE_BARCODE_SCANNING
    }
}

export const changePageAdminMainMenu = () => {
    return {
        type: actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU
    };
}

export const changePageAdminUserRecords = () => {
    return {
        type: actionTypes.CHANGE_PAGE_ADMIN_USER_RECORDS
    };
}

export const changePageAdminCustomerRecords = () => {
    return {
        type: actionTypes.CHANGE_PAGE_ADMIN_CUSTOMER_RECORDS
    };
}

export const changePageAdminProductsPage = () => {
    return {
        type: actionTypes.CHANGE_PAGE_ADMIN_PRODUCTS_PAGE
    };
}

export const changePageAdminStockingPage = () => {
    return {
        type: actionTypes.CHANGE_PAGE_ADMIN_STOCKING_PAGE
    };
}

export const changePageAdminRecordsHistory = () => {
    return {
        type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
    };
}

export const changePageUserMainMenu = () => {
    return {
        type: actionTypes.CHANGE_PAGE_USER_MAIN_MENU
    };
}

export const changePageUserShoppingPage = () => {
    return {
        type: actionTypes.CHANGE_PAGE_USER_SHOPPING_PAGE
    };
}

export const changeModeAdmin = (username, timeout) => {
    return {
        type: actionTypes.CHANGE_MODE_ADMIN,
        username: username,
        timeout: timeout
    };
}

export const changeModeUser = () => {
    return {
        type: actionTypes.CHANGE_MODE_USER
    };
}

export const changeModeUserDueTimeout = () => {
    return {
        type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
    };
}

export const showShoppingForm = () => {
    return {
        type: actionTypes.SHOW_SHOPPING_FORM
    }
}

export const selectCustomer = (customerId) => {
    return {
        type: actionTypes.SELECT_CUSTOMER,
        customerId: customerId
    };
}

export const selectAnonymous = () => {
    return {
        type: actionTypes.SELECT_ANONYMOUS
    }
}

export const openPaymentDialog = (total) => {
    return {
        type: actionTypes.OPEN_PAYMENT_DIALOG,
        total: total
    };
}

export const closePaymentDialog = () => {
    return {
        type: actionTypes.CLOSE_PAYMENT_DIALOG
    };
}

export const payNow = () => {
    return {
        type: actionTypes.PAY_NOW
    };
}

export const payCash = () => {
    return {
        type: actionTypes.PAY_CASH
    };
}

export const changeTaken = () => {
    return {
        type: actionTypes.CHANGE_TAKEN
    };
}

export const updateCashField = (cash) => {
    return {
        type: actionTypes.UPDATE_CASH_FIELD,
        cash: cash
    };
}

export const openPriceCheckDialog = () => {
    return {
        type: actionTypes.OPEN_PRICE_CHECK_DIALOG
    };
}

export const closePriceCheckDialog = () => {
    return {
        type: actionTypes.CLOSE_PRICE_CHECK_DIALOG
    };
}

export const addStock = (stock) => {
    return {
        type: actionTypes.ADD_STOCK,
        stock: stock
    };
}

export const addSales = (sales, customerCredit) => {
    return {
        type: actionTypes.ADD_SALES,
        sales: sales,
        customerCredit: customerCredit
    };
}

export const addCredit = (credit) => {
    return {
        type: actionTypes.ADD_CREDIT,
        credit: credit
    };
}

export const failLoginUser = () => {
    return {
        type: actionTypes.FAIL_LOGIN_USER
    }
}

export const failAddUser = () => {
    return {
        type: actionTypes.FAIL_ADD_USER
    }
}

export const failSaveUser = () => {
    return {
        type: actionTypes.FAIL_SAVE_USER
    }
}

export const failAddCustomer = () => {
    return {
        type: actionTypes.FAIL_ADD_CUSTOMER
    }
}

export const failSaveCustomer = () => {
    return {
        type: actionTypes.FAIL_SAVE_CUSTOMER
    }
}

export const failAddSupplier = () => {
    return {
        type: actionTypes.FAIL_ADD_SUPPLIER
    }
}

export const failSaveSupplier = () => {
    return {
        type: actionTypes.FAIL_SAVE_SUPPLIER
    }
}

export const failAddBrand = () => {
    return {
        type: actionTypes.FAIL_ADD_BRAND
    }
}

export const failSaveBrand = () => {
    return {
        type: actionTypes.FAIL_SAVE_BRAND
    }
}

export const failAddItem = () => {
    return {
        type: actionTypes.FAIL_ADD_ITEM
    }
}

export const failSaveItem = () => {
    return {
        type: actionTypes.FAIL_SAVE_ITEM
    }
}

export const serverLoginUser = (username, password) => {
    return {
        type: actionTypes.SERVER_LOGIN_USER,
        username: username,
        password: password
    }
}

export const serverAddUser = () => {
    return {
        type: actionTypes.SERVER_ADD_USER
    };
}

export const serverSaveUser = () => {
    return {
        type: actionTypes.SERVER_SAVE_USER
    };
}

export const serverDeleteUser = () => {
    return {
        type: actionTypes.SERVER_DELETE_USER
    };
}

export const serverAddCustomer = () => {
    return {
        type: actionTypes.SERVER_ADD_CUSTOMER
    };
}

export const serverSaveCustomer = () => {
    return {
        type: actionTypes.SERVER_SAVE_CUSTOMER
    };
}

export const serverDeleteCustomer = () => {
    return {
        type: actionTypes.SERVER_DELETE_CUSTOMER
    };
}

export const serverAddSupplier = () => {
    return {
        type: actionTypes.SERVER_ADD_SUPPLIER
    };
}

export const serverSaveSupplier = () => {
    return {
        type: actionTypes.SERVER_SAVE_SUPPLIER
    };
}

export const serverDeleteSupplier = () => {
    return {
        type: actionTypes.SERVER_DELETE_SUPPLIER
    };
}

export const serverAddBrand = () => {
    return {
        type: actionTypes.SERVER_ADD_BRAND
    };
}

export const serverSaveBrand = () => {
    return {
        type: actionTypes.SERVER_SAVE_BRAND
    };
}

export const serverDeleteBrand = () => {
    return {
        type: actionTypes.SERVER_DELETE_BRAND
    };
}

export const serverAddItem = () => {
    return {
        type: actionTypes.SERVER_ADD_ITEM
    };
}

export const serverSaveItem = () => {
    return {
        type: actionTypes.SERVER_SAVE_ITEM
    };
}

export const serverDeleteItem = () => {
    return {
        type: actionTypes.SERVER_DELETE_ITEM
    };
}

export const serverAddStock = () => {
    return {
        type: actionTypes.SERVER_ADD_STOCK
    };
}

export const serverAddSales = () => {
    return {
        type: actionTypes.SERVER_ADD_SALES
    };
}

export const serverAddCredit = () => {
    return {
        type: actionTypes.SERVER_ADD_CREDIT
    };
}

export const serverSaveChangeAsCustomerCredit = (customerCredit) => {
    return {
        type: actionTypes.SERVER_SAVE_CHANGE_AS_CUSTOMER_CREDIT,
        customerCredit: customerCredit
    };
}

export const serverSearchRecords = (searchCriteria) => {
    return {
        type: actionTypes.SERVER_SEARCH_RECORDS,
        searchCriteria: searchCriteria
    }
}