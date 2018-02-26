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
        const expectedAction = {
            type: actionTypes.ADD_USER
        }
        expect(actions.addUser()).toEqual(expectedAction);
    });

    it('should create an action to save user', () => {
        const expectedAction = {
            type: actionTypes.SAVE_USER
        }
        expect(actions.saveUser()).toEqual(expectedAction);
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
        const expectedAction = {
            type: actionTypes.ADD_CUSTOMER
        }
        expect(actions.addCustomer()).toEqual(expectedAction);
    });

    it('should create an action to save customer', () => {
        const expectedAction = {
            type: actionTypes.SAVE_CUSTOMER
        }
        expect(actions.saveCustomer()).toEqual(expectedAction);
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
            type: actionTypes.UPDATE_FROM_DATE_FIELD,
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
});