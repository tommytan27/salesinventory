import * as actions from './../actions';
import actionTypes from './../constants/actionTypes';

describe('UserRecords Actions', () => {
    it('should create an action to open add user dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        }
        expect(actions.openAddUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit user dialog', () => {
        const dummyUser = {
            id: 123,
            username: "dummy",
            timeout: 10
        };
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        }
        expect(actions.openEditUserDialog(dummyUser)).toEqual(expectedAction);
    });

    it('should create an action to close user dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_USER_DIALOG
        }
        expect(actions.closeUserDialog()).toEqual(expectedAction);
    });

    it('should create an action to enable editable', () => {
        const expectedAction = {
            type: actionTypes.ENABLE_EDITABLE
        }
        expect(actions.enableEditable()).toEqual(expectedAction);
    });

    it('should create an action to update the username field', () => {
        const dummyUsername = "dummy";
        const dummyUsers = [
            {id: 1, username: "admin", timeout: 10},
            {id: 2, username: "ttanzil", timeout: 10},
            {id: 3, username: "hwinarto", timeout: 10}
        ];
        const expectedAction = {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: dummyUsername,
            allUsers: dummyUsers
        }
        expect(actions.updateUsernameField(dummyUsername, dummyUsers)).toEqual(expectedAction);
    });
    
    it('should create an action to update the timeout field', () => {
        const dummyTimeout = 50;
        const expectedAction = {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: dummyTimeout
        }
        expect(actions.updateTimeoutField(dummyTimeout)).toEqual(expectedAction);
    });
    
    it('should create an action to update the password field', () => {
        const dummyPassword = "password";
        const expectedAction = {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        }
        expect(actions.updatePasswordField(dummyPassword)).toEqual(expectedAction);
    });
    
    it('should create an action to update the confirm password field', () => {
        const dummyPassword = "password";
        const expectedAction = {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        }
        expect(actions.updateConfirmPasswordField(dummyPassword)).toEqual(expectedAction);
    });

    it('should create an action to add user', () => {
        const expectedUser = {
            username: "admin",
            password: "Admin123",
            timeout: 10
        };
        const expectedAction = {
            type: actionTypes.ADD_USER,
            user: expectedUser
        }
        expect(actions.addUser(expectedUser)).toEqual(expectedAction);
    });

    it('should create an action to save user', () => {
        const expectedUser = {
            username: "admin",
            password: "Admin123",
            timeout: 10
        };
        const expectedAction = {
            type: actionTypes.SAVE_USER,
            user: expectedUser
        }
        expect(actions.saveUser(expectedUser)).toEqual(expectedAction);
    });
    
    it('should create an action to add user via signalR', () => {
        const expectedAction = {
            type: actionTypes.SIGNAL_R_ADD_USER
        }
        expect(actions.signalRAddUser()).toEqual(expectedAction);
    });

    it('should create an action to save user via signalR', () => {
        const expectedAction = {
            type: actionTypes.SIGNAL_R_SAVE_USER
        }
        expect(actions.signalRSaveUser()).toEqual(expectedAction);
    });
    
    it ('should create an action to notify user about failing adding user', () => {
        const expectedAction = {
            type: actionTypes.FAIL_ADD_USER
        }
        expect(actions.failAddUser()).toEqual(expectedAction);
    });
    
    it ('should create an action to notify user about failing saving user', () => {
        const expectedAction = {
            type: actionTypes.FAIL_SAVE_USER
        }
        expect(actions.failSaveUser()).toEqual(expectedAction);
    });
});

describe('CustomerRecords Actions', () => {
    it('should create an action to open add customer dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
        }
        expect(actions.openAddCustomerDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit customer dialog', () => {
        const dummyCustomer = {
            id: 123,
            firstName: "first",
            lastName: "last",
            contact: "0425297556",
            credit: 10.0
        };
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
            customer: dummyCustomer
        }
        expect(actions.openEditCustomerDialog(dummyCustomer)).toEqual(expectedAction);
    });
    
    it('should create an action to close customer dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_CUSTOMER_DIALOG
        }
        expect(actions.closeCustomerDialog()).toEqual(expectedAction);
    });

    it('should create an action to update the firstName field', () => {
        const dummyFirstName = "first";
        const expectedAction = {
            type: actionTypes.UPDATE_FIRSTNAME_FIELD,
            firstName: dummyFirstName
        }
        expect(actions.updateFirstNameField(dummyFirstName)).toEqual(expectedAction);
    });

    it('should create an action to update the lastName field', () => {
        const dummyLastName = "last";
        const expectedAction = {
            type: actionTypes.UPDATE_LASTNAME_FIELD,
            lastName: dummyLastName
        }
        expect(actions.updateLastNameField(dummyLastName)).toEqual(expectedAction);
    });

    it('should create an action to update the contact field', () => {
        const dummyContact = "04259656325";
        const expectedAction = {
            type: actionTypes.UPDATE_CONTACT_FIELD,
            contact: dummyContact
        }
        expect(actions.updateContactField(dummyContact)).toEqual(expectedAction);
    });

    it('should create an action to add customer', () => {
        const expectedCustomer = {
            id: 1,
            firstName: "Tommy",
            lastName: "Tanzil",
            contact: "0425927766",
            crdit: 0.0
        }
        const expectedAction = {
            type: actionTypes.ADD_CUSTOMER,
            customer: expectedCustomer
        }
        expect(actions.addCustomer(expectedCustomer)).toEqual(expectedAction);
    });

    it('should create an action to save customer', () => {
        const expectedCustomer = {
            id: 1,
            firstName: "Tommy",
            lastName: "Tanzil",
            contact: "0425927766",
            crdit: 0.0
        }
        const expectedAction = {
            type: actionTypes.SAVE_CUSTOMER,
            customer: expectedCustomer
        }
        expect(actions.saveCustomer(expectedCustomer)).toEqual(expectedAction);
    });

    it('should create an action to add customer via signalR', () => {
        const expectedAction = {
            type: actionTypes.SIGNAL_R_ADD_CUSTOMER
        }
        expect(actions.signalRAddCustomer()).toEqual(expectedAction);
    });

    it('should create an action to save customer via signalR', () => {
        const expectedAction = {
            type: actionTypes.SIGNAL_R_SAVE_CUSTOMER
        }
        expect(actions.signalRSaveCustomer()).toEqual(expectedAction);
    });
    
    it ('should create an action to notify user about failing adding customer', () => {
        const expectedAction = {
            type: actionTypes.FAIL_ADD_CUSTOMER
        }
        expect(actions.failAddCustomer()).toEqual(expectedAction);
    });
    
    it ('should create an action to notify user about failing saving customer', () => {
        const expectedAction = {
            type: actionTypes.FAIL_SAVE_CUSTOMER
        }
        expect(actions.failSaveCustomer()).toEqual(expectedAction);
    });
});

describe ('SupplierRecords Actions', () => {
    it('should create an action to open add supplier dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_SUPPLIER_DIALOG
        }
        expect(actions.openAddSupplierDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit supplier dialog', () => {
        const dummySupplier = {
            id: 123,
            name: "supplier",
            contact: "0425297556"
        };
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_SUPPLIER_DIALOG,
            supplier: dummySupplier
        }
        expect(actions.openEditSupplierDialog(dummySupplier)).toEqual(expectedAction);
    });

    it('should create an action to close supplier dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_SUPPLIER_DIALOG
        }
        expect(actions.closeSupplierDialog()).toEqual(expectedAction);
    });

    it('should create an action to update supplier name', () => {
        const dummySupplierName = "dummy";
        const expectedAction = {
            type: actionTypes.UPDATE_SUPPLIER_NAME_FIELD,
            name: dummySupplierName
        }
        expect(actions.updateSupplierNameField(dummySupplierName)).toEqual(expectedAction);
    });

    it('should create an action to add supplier', () => {
        const expectedAction = {
            type: actionTypes.ADD_SUPPLIER
        }
        expect(actions.addSupplier()).toEqual(expectedAction);
    });

    it('should create an action to save supplier', () => {
        const expectedAction = {
            type: actionTypes.SAVE_SUPPLIER
        }
        expect(actions.saveSupplier()).toEqual(expectedAction);
    });

    it('should create an action to change tab to supplier record', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_TAB_SUPPLIER_RECORD
        }
        expect(actions.changeTabSupplierRecord()).toEqual(expectedAction);
    });
});

describe ('BrandRecords Actions', () => {
    it('should create an action to open add brand dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_BRAND_DIALOG
        }
        expect(actions.openAddBrandDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit brand dialog', () => {
        const dummyItem = {
            id: 12,
            name: 'brand'
        }
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_BRAND_DIALOG,
            brand: dummyItem
        }
        expect(actions.openEditBrandDialog(dummyItem)).toEqual(expectedAction);
    });

    it('should create an action to close brand dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_BRAND_DIALOG
        }
        expect(actions.closeBrandDialog()).toEqual(expectedAction);
    });

    it('should create an action to update brand name', () => {
        const dummyItemName = 'dummy';
        const expectedAction = {
            type: actionTypes.UPDATE_BRAND_NAME_FIELD,
            name: dummyItemName
        }
        expect(actions.updateBrandNameField(dummyItemName)).toEqual(expectedAction);
    });

    it('should create an action to add brand', () => {
        const expectedAction = {
            type: actionTypes.ADD_BRAND
        }
        expect(actions.addBrand()).toEqual(expectedAction);
    });

    it('should create an action to save brand', () => {
        const expectedAction = {
            type: actionTypes.SAVE_BRAND
        }
        expect(actions.saveBrand()).toEqual(expectedAction);
    });

    it('should create an action to change tab to brand record', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_TAB_BRAND_RECORD
        }
        expect(actions.changeTabBrandRecord()).toEqual(expectedAction);
    });
});

describe ('ItemRecords Actions', () => {
    it('should create an action to open add item dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_ADD_ITEM_DIALOG
        }
        expect(actions.openAddItemDialog()).toEqual(expectedAction);
    });

    it('should create an action to open edit item dialog', () => {
        const dummyItem = {
            barcode: 124315,
            name: 'item',
            supplierId: 2,
            brandId: 3,
            price: 5.00,
            vegan: true,
            qty: 3
        }
        const expectedAction = {
            type: actionTypes.OPEN_EDIT_ITEM_DIALOG,
            item: dummyItem
        }
        expect(actions.openEditItemDialog(dummyItem)).toEqual(expectedAction);
    });

    it('should create an action to close item dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_ITEM_DIALOG
        }
        expect(actions.closeItemDialog()).toEqual(expectedAction);
    });

    it('should create an action to update item name', () => {
        const dummyItemName = 'dummy';
        const expectedAction = {
            type: actionTypes.UPDATE_ITEM_NAME_FIELD,
            name: dummyItemName
        }
        expect(actions.updateItemNameField(dummyItemName)).toEqual(expectedAction);
    });

    it('should create an action to update item barcode', () => {
        const dummyItemBarcode = '5315162';
        const expectedAction = {
            type: actionTypes.UPDATE_BARCODE_FIELD,
            barcode: dummyItemBarcode
        }
        expect(actions.updateBarcodeField(dummyItemBarcode)).toEqual(expectedAction);
    });

    it('should create an action to update item price', () => {
        const dummySellPrice = 5.60;
        const expectedAction = {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: dummySellPrice
        }
        expect(actions.updateSellPriceField(dummySellPrice)).toEqual(expectedAction);
    });

    it('should create an action to update item cost price', () => {
        const dummyCostPrice = 4.60;
        const expectedAction = {
            type: actionTypes.UPDATE_COST_PRICE_FIELD,
            price: dummyCostPrice
        }
        expect(actions.updateCostPriceField(dummyCostPrice)).toEqual(expectedAction);
    });

    it('should create an action to toggle item vegan', () => {
        const expectedAction = {
            type: actionTypes.TOGGLE_VEGAN_FLAG
        }
        expect(actions.toggleVeganFlag()).toEqual(expectedAction);
    });

    it('should create an action to select supplier', () => {
        const dummySupplierId = 2;
        const expectedAction = {
            type: actionTypes.SELECT_SUPPLIER,
            supplierId: dummySupplierId
        }
        expect(actions.selectSupplier(dummySupplierId)).toEqual(expectedAction);
    });

    it('should create an action to select brand', () => {
        const dummyBrandId = 2;
        const expectedAction = {
            type: actionTypes.SELECT_BRAND,
            brandId: dummyBrandId
        }
        expect(actions.selectBrand(dummyBrandId)).toEqual(expectedAction);
    });

    it('should create an action to select item', () => {
        const dummyBarcode = "151531553";
        const dummyItems = [
            {
                barcode: "1153135151", name: "Salted Chicken", supplierId: 1, 
                brandId: 1, price: 9.00, costPrice: 8.50, vegan: true, qty: 2
            },
            {
                barcode: "1531831812", name: "Soy Nugget", supplierId: 2, 
                brandId: 2, price: 8.50, costPrice: 7.50, vegan: true, qty: 5
            },
            {
                barcode: "3531312151", name: "ItemX", supplierId: 3, 
                brandId: 3, price: 13.00, costPrice: 11.50, vegan: false, qty: 8
            }
        ];
        const expectedAction = {
            type: actionTypes.SELECT_ITEM,
            barcode: dummyBarcode,
            items: dummyItems
        }
        expect(actions.selectItem(dummyBarcode, dummyItems)).toEqual(expectedAction);
    });

    it('should create an action to add item', () => {
        const expectedAction = {
            type: actionTypes.ADD_ITEM
        }
        expect(actions.addItem()).toEqual(expectedAction);
    });

    it('should create an action to save item', () => {
        const expectedAction = {
            type: actionTypes.SAVE_ITEM
        }
        expect(actions.saveItem()).toEqual(expectedAction);
    });

    it('should create an action to change tab to item record', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_TAB_ITEM_RECORD
        }
        expect(actions.changeTabItemRecord()).toEqual(expectedAction);
    });
});

describe ('SalesRecords Actions', () => {
    it('should create an action to change tab to sales record', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_TAB_SALES_RECORD
        }
        expect(actions.changeTabSalesRecord()).toEqual(expectedAction);
    });
});

describe ('CreditRecords Actions', () => {
    it('should create an action to change tab to sales record', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_TAB_CREDIT_RECORD
        }
        expect(actions.changeTabCreditRecord()).toEqual(expectedAction);
    });
});

describe ('StockRecords Actions', () => {
    it('should create an action to change tab to sales record', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_TAB_STOCK_RECORD
        }
        expect(actions.changeTabStockRecord()).toEqual(expectedAction);
    });
});

describe ('SearchDialogs Actions', () => {
    it ('should create an action to open search dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_SEARCH_DIALOG
        }
        expect(actions.openSearchDialog()).toEqual(expectedAction);
    });

    it ('should create an action to update fromDate field', () => {
        const expectedFromDate = '2018/02/26';
        const expectedAction = {
            type: actionTypes.UPDATE_FROM_DATE_FIELD,
            fromDate: expectedFromDate
        }
        expect(actions.updateFromDateField(expectedFromDate)).toEqual(expectedAction);
    });

    it ('should create an action to update toDate field', () => {
        const expectedToDate = '2018/02/26';
        const expectedAction = {
            type: actionTypes.UPDATE_TO_DATE_FIELD,
            toDate: expectedToDate
        }
        expect(actions.updateToDateField(expectedToDate)).toEqual(expectedAction);
    });

    it ('should create an action to update customer combo', () => {
        const expectedCustomerId = 1;
        const expectedAction = {
            type: actionTypes.UPDATE_CUSTOMER_COMBO,
            customerId: expectedCustomerId
        }
        expect(actions.updateCustomerCombo(expectedCustomerId)).toEqual(expectedAction);
    });

    it ('should create an action to close search dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_SEARCH_DIALOG
        }
        expect(actions.closeSearchDialog()).toEqual(expectedAction);
    });

    it ('should create an action to open records details dialog', () => {
        const expetedRecordsDetails = [
            {barcode: "1153135151", qty: 2},
            {barcode: "3531312151", qty: 2}
        ];
        const expectedAction = {
            type: actionTypes.OPEN_RECORDS_DETAILS_DIALOG,
            recordsDetails: expetedRecordsDetails
        }
        expect(actions.openRecordsDetailsDialog(expetedRecordsDetails)).toEqual(expectedAction);
    });

    it ('should create an action to close records details dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_RECORDS_DETAILS_DIALOG
        }
        expect(actions.closeRecordsDetailsDialog()).toEqual(expectedAction);
    });
});

describe ('LoginDialogs Actions', () => {    
    it ('should create an action to open login dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_LOGIN_DIALOG
        }
        expect(actions.openLoginDialog()).toEqual(expectedAction);
    });

    it ('should create an action to close login dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_LOGIN_DIALOG
        }
        expect(actions.closeLoginDialog()).toEqual(expectedAction);
    });

    it ('should create an action to login user via signalR', () => {
        const expectedAction = {
            type: actionTypes.SIGNAL_R_LOGIN_USER,
            username: "admin",
            password: "12345"
        }
        expect(actions.signalRLoginUser("admin", "12345")).toEqual(expectedAction);
    });

    it ('should create an action to notify user about failing login', () => {
        const expectedAction = {
            type: actionTypes.FAIL_LOGIN_USER
        }
        expect(actions.failLoginUser()).toEqual(expectedAction);
    });
});

describe ('SelectCustomerDialogs Actions', () => {    
    it ('should create an action to open select customer dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_SELECT_CUSTOMER_DIALOG
        }
        expect(actions.openSelectCustomerDialog()).toEqual(expectedAction);
    });

    it ('should create an action to close select customer dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_SELECT_CUSTOMER_DIALOG
        }
        expect(actions.closeSelectCustomerDialog()).toEqual(expectedAction);
    });

    it ('should create an action to select a customer', () => {
        const expectedCustomer = {
            id: 1, firstName: "Tommy", lastName: "Tanzil", contact: "0425927766", credit: 2.50
        };
        const expectedAction = {
            type: actionTypes.SELECT_CUSTOMER,
            customerId: expectedCustomer.id
        }
        expect(actions.selectCustomer(expectedCustomer.id)).toEqual(expectedAction);
    });

    it ('should create an action to select anonymous', () => {
        const expectedAction = {
            type: actionTypes.SELECT_ANONYMOUS
        }
        expect(actions.selectAnonymous()).toEqual(expectedAction);
    });
});

describe ('StockingShoppingRecords Actions', () => {
    it ('should create an action to remove stocking record from the list', () => {
        let expectedRecordId = 1;
        const expectedAction = {
            type: actionTypes.REMOVE_STOCKING_RECORD_FROM_LIST,
            recordId: expectedRecordId
        }
        expect(actions.removeStockingRecordFromList(expectedRecordId)).toEqual(expectedAction);
    });
    it ('should create an action to add stocking record to the list', () => {
        let expectedItem = {
            barcode: "123456789",
            qty: 4,
            sellPrice: 10.50,
            costPRice: 8.75
        };
        const expectedAction = {
            type: actionTypes.ADD_STOCKING_RECORD_TO_LIST,
            item: expectedItem
        }
        expect(actions.addStockingRecordToList(expectedItem)).toEqual(expectedAction);
    });
    it ('should create an action to initiate barcode scanning', () => {
        const expectedAction = {
            type: actionTypes.INITIATE_BARCODE_SCANNING
        }
        expect(actions.initiateBarcodeScanning()).toEqual(expectedAction);
    });
    it ('should create an action to select item and add to list', () => {
        const dummyBarcode = "151531553";
        const dummyItems = [
            {
                barcode: "1153135151", name: "Salted Chicken", supplierId: 1, 
                brandId: 1, price: 9.00, costPrice: 8.50, vegan: true, qty: 2
            },
            {
                barcode: "1531831812", name: "Soy Nugget", supplierId: 2, 
                brandId: 2, price: 8.50, costPrice: 7.50, vegan: true, qty: 5
            },
            {
                barcode: "3531312151", name: "ItemX", supplierId: 3, 
                brandId: 3, price: 13.00, costPrice: 11.50, vegan: false, qty: 8
            }
        ];
        const expectedAction = {
            type: actionTypes.SELECT_ITEM_AND_ADD,
            barcode: dummyBarcode,
            items: dummyItems
        }
        expect(actions.selectItemAndAdd(dummyBarcode, dummyItems)).toEqual(expectedAction);
    });    
    it('should create an action to show shopping form', () => {
        const expectedAction = {
            type: actionTypes.SHOW_SHOPPING_FORM
        }
        expect(actions.showShoppingForm()).toEqual(expectedAction);
    });
});

describe ('ActivePage Actions', () => {
    it('should create an action to change page to admin main menu', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU
        }
        expect(actions.changePageAdminMainMenu()).toEqual(expectedAction);
    });
    it('should create an action to change page to admin user records', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_ADMIN_USER_RECORDS
        }
        expect(actions.changePageAdminUserRecords()).toEqual(expectedAction);
    });
    it('should create an action to change page to admin customer records', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_ADMIN_CUSTOMER_RECORDS
        }
        expect(actions.changePageAdminCustomerRecords()).toEqual(expectedAction);
    });
    it('should create an action to change page to admin products page', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_ADMIN_PRODUCTS_PAGE
        }
        expect(actions.changePageAdminProductsPage()).toEqual(expectedAction);
    });
    it('should create an action to change page to admin stocking page', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_ADMIN_STOCKING_PAGE
        }
        expect(actions.changePageAdminStockingPage()).toEqual(expectedAction);
    });
    it('should create an action to change page to admin records history', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
        }
        expect(actions.changePageAdminRecordsHistory()).toEqual(expectedAction);
    });
    it('should create an action to change page to user main menu', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_USER_MAIN_MENU
        }
        expect(actions.changePageUserMainMenu()).toEqual(expectedAction);
    });
    it('should create an action to change page to user shopping page', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_PAGE_USER_SHOPPING_PAGE
        }
        expect(actions.changePageUserShoppingPage()).toEqual(expectedAction);
    });
});

describe ('ActiveMode Actions', () => {
    it('should create an action to change mode to admin', () => {
        const expectedTimeout = 10;
        const expectedUsername = "testUser";
        const expectedAction = {
            type: actionTypes.CHANGE_MODE_ADMIN,
            username: expectedUsername,
            timeout: expectedTimeout
        }
        expect(actions.changeModeAdmin(expectedUsername, expectedTimeout)).toEqual(expectedAction);
    });
    it('should create an action to change mode to user', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_MODE_USER
        }
        expect(actions.changeModeUser()).toEqual(expectedAction);
    });
    it('should create an action to change mode to user due to timeout', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT
        }
        expect(actions.changeModeUserDueTimeout()).toEqual(expectedAction);
    });
});

describe ('PaymentDialogs Actions', () => {    
    it ('should create an action to open payment dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_PAYMENT_DIALOG,
            total: "20.50"
        }
        expect(actions.openPaymentDialog("20.50")).toEqual(expectedAction);
    });

    it ('should create an action to close payment dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_PAYMENT_DIALOG
        }
        expect(actions.closePaymentDialog()).toEqual(expectedAction);
    });

    it ('should create an action to pay now', () => {
        const expectedAction = {
            type: actionTypes.PAY_NOW
        }
        expect(actions.payNow()).toEqual(expectedAction);
    });

    it ('should create an action to pay cash', () => {
        const expectedAction = {
            type: actionTypes.PAY_CASH
        }
        expect(actions.payCash()).toEqual(expectedAction);
    });

    it ('should create an action to set change has been taken', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_TAKEN
        }
        expect(actions.changeTaken()).toEqual(expectedAction);
    });

    it ('should create an action to update cash field', () => {
        const expectedAction = {
            type: actionTypes.UPDATE_CASH_FIELD,
            cash: "20.50"
        }
        expect(actions.updateCashField("20.50")).toEqual(expectedAction);
    });
});

describe ('PriceCheckDialogs Actions', () => {    
    it ('should create an action to open price check dialog', () => {
        const expectedAction = {
            type: actionTypes.OPEN_PRICE_CHECK_DIALOG
        }
        expect(actions.openPriceCheckDialog()).toEqual(expectedAction);
    });

    it ('should create an action to close price check dialog', () => {
        const expectedAction = {
            type: actionTypes.CLOSE_PRICE_CHECK_DIALOG
        }
        expect(actions.closePriceCheckDialog()).toEqual(expectedAction);
    });
});