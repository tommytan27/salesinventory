import itemSelectionForm from './../../reducers/forms/itemSelectionForm';
import actionTypes from './../../constants/actionTypes';
import { showShoppingForm } from './../../actions/index';

const assertInitialState = (returnValue) => {
    expect(returnValue.barcodeEditable).toBeTruthy();
    expect(returnValue.barcodeField).toBeNull();
    expect(returnValue.shoppingFormVisible).toBeFalsy();
    expect(returnValue.addableItem).toBeFalsy();
    expect(returnValue.selectedItem.supplierId).toBe(1);
    expect(returnValue.selectedItem.brandId).toBe(1);
    expect(returnValue.selectedItem.barcode).toBeNull();
    expect(returnValue.selectedItem.sellPrice.value).toBeNull();
    expect(returnValue.selectedItem.costPrice.value).toBeNull();
    expect(returnValue.selectedItem.qty.value).toBeNull();
    expect(returnValue.selectedItem.sellPrice.state).toBeNull();
    expect(returnValue.selectedItem.costPrice.state).toBeNull();
    expect(returnValue.selectedItem.qty.state).toBeNull();
}

const dummyBarcode = "1531831812";
const dummySupplierId = 2;
const dummyBrandId = 3;
const dummySellPrice = 5.50;
const dummyCostPrice = 4.50;
const dummyQty = 3;

const dummyItem = {
    barcode: "3531312151", qty: {value: 5}, sellPrice: {value: 14.00}, costPrice: {value: 12.00}
}

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

describe('ItemSelectionForm Store', () => {
    it('should return initial state of supplier, brand, and items set to the first option', () => {
        const returnValue = itemSelectionForm(undefined, {});
        assertInitialState(returnValue);
    });
    it('should return initial state when receiving CHANGE_PAGE_USER_MAIN_MENU', () => {
        const returnValue = itemSelectionForm({
            showShoppingForm: true
        }, {type: actionTypes.CHANGE_PAGE_USER_MAIN_MENU});
        assertInitialState(returnValue);
    });
    it('should return the modified supplier field when receiving SELECT_SUPPLIER action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.SELECT_SUPPLIER,
            supplierId: dummySupplierId
        });
        expect(returnValue.selectedItem
            .supplierId).toEqual(dummySupplierId);
    });
    it('should return the modified brand field when receiving SELECT_BRAND action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.SELECT_BRAND,
            brandId: dummyBrandId
        });
        expect(returnValue.selectedItem
            .brandId).toEqual(dummyBrandId);
    });
    it('should return the modified item field when receiving SELECT_ITEM action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.SELECT_ITEM,
            barcode: dummyBarcode,
            items: dummyItems
        });
        expect(returnValue.selectedItem
            .barcode).toEqual(dummyBarcode.toString());
    });
    it('should return the modified other fields when receiving SELECT_ITEM action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.SELECT_ITEM,
            barcode: dummyBarcode,
            items: dummyItems
        });

        expect(returnValue.barcodeField).toEqual(dummyBarcode.toString());
        expect(returnValue.selectedItem.supplierId).toEqual(2);
        expect(returnValue.selectedItem.brandId).toEqual(2);
        expect(returnValue.selectedItem.sellPrice.value).toEqual("8.5");
        expect(returnValue.selectedItem.sellPrice.state).toEqual("success");
        expect(returnValue.selectedItem.costPrice.value).toEqual("7.5");
        expect(returnValue.selectedItem.costPrice.state).toEqual("success");
        expect(returnValue.selectedItem.qty.value).toEqual(1);
        expect(returnValue.selectedItem.qty.state).toEqual("success");
    });
    it('should return the null other fields when receiving SELECT_ITEM action with invalid barcode', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.SELECT_ITEM,
            barcode: "123486162",
            items: dummyItems
        });

        expect(returnValue.barcodeField).toBeNull();
        expect(returnValue.selectedItem.supplierId).toEqual(1);
        expect(returnValue.selectedItem.brandId).toEqual(1);
        expect(returnValue.selectedItem.sellPrice.value).toBeNull();
        expect(returnValue.selectedItem.sellPrice.state).toBeNull();
        expect(returnValue.selectedItem.costPrice.value).toBeNull();
        expect(returnValue.selectedItem.costPrice.state).toBeNull();
        expect(returnValue.selectedItem.qty.value).toBeNull();
        expect(returnValue.selectedItem.qty.state).toBeNull();
    });    
    it('should return the autoAdd false when receiving SELECT_ITEM action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.SELECT_ITEM,
            barcode: dummyBarcode,
            items: dummyItems
        });
        expect(returnValue.autoAdd).toBeFalsy();
    });
    it('should return the autoAdd true when receiving SELECT_ITEM_AND_ADD action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.SELECT_ITEM_AND_ADD,
            barcode: dummyBarcode,
            items: dummyItems
        });
        expect(returnValue.autoAdd).toBeTruthy();
    });
    it('should return the modified price field with success state when receiving UPDATE_SELL_PRICE_FIELD action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: dummySellPrice
        });
        expect(returnValue.selectedItem.sellPrice.value).toEqual(dummySellPrice);
        expect(returnValue.selectedItem.sellPrice.state).toEqual("success");
    });   
    it('should return empty price field with null state when receiving UPDATE_SELL_PRICE_FIELD action with empty price', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: ""
        });
        expect(returnValue.selectedItem.sellPrice.value).toEqual("");
        expect(returnValue.selectedItem.sellPrice.state).toBeNull();
    });  
    it('should return the last valid price field with success state when receiving UPDATE_SELL_PRICE_FIELD action with invalid price', () => {
        const returnValue = itemSelectionForm({
            selectedItem: {
                sellPrice: {
                    value: "15",
                    state: "success"
                }
            }
        }, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "15s"
        });
        expect(returnValue.selectedItem.sellPrice.value).toEqual("15");
        expect(returnValue.selectedItem.sellPrice.state).toEqual("success");
    }); 
    it('should return empty/null price field with null state when receiving UPDATE_SELL_PRICE_FIELD action with invalid price from empty', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "s"
        });
        expect(returnValue.selectedItem.sellPrice.value).toBeNull;
        expect(returnValue.selectedItem.sellPrice.state).toBeNull;
    });
    it('should return modified price field including point value with success state when receiving UPDATE_SELL_PRICE_FIELD action with decimal price', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "20."
        });
        expect(returnValue.selectedItem.sellPrice.value).toEqual("20.");
        expect(returnValue.selectedItem.sellPrice.state).toEqual("success");
    });
    it('should return modified price field including decimal value with success state when receiving UPDATE_SELL_PRICE_FIELD action with decimal price', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_SELL_PRICE_FIELD,
            price: "20.2"
        });
        expect(returnValue.selectedItem.sellPrice.value).toEqual("20.2");
        expect(returnValue.selectedItem.sellPrice.state).toEqual("success");
    });
    it('should return the modified price field with success state when receiving UPDATE_COST_PRICE_FIELD action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_COST_PRICE_FIELD,
            price: dummyCostPrice
        });
        expect(returnValue.selectedItem.costPrice.value).toEqual(dummyCostPrice);
        expect(returnValue.selectedItem.costPrice.state).toEqual("success");
    });   
    it('should return empty price field with null state when receiving UPDATE_COST_PRICE_FIELD action with empty price', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_COST_PRICE_FIELD,
            price: ""
        });
        expect(returnValue.selectedItem.costPrice.value).toEqual("");
        expect(returnValue.selectedItem.costPrice.state).toBeNull();
    });  
    it('should return the last valid price field with success state when receiving UPDATE_COST_PRICE_FIELD action with invalid price', () => {
        const returnValue = itemSelectionForm({
            selectedItem: {
                costPrice: {
                    value: "15",
                    state: "success"
                }
            }
        }, {
            type: actionTypes.UPDATE_COST_PRICE_FIELD,
            price: "15s"
        });
        expect(returnValue.selectedItem.costPrice.value).toEqual("15");
        expect(returnValue.selectedItem.costPrice.state).toEqual("success");
    }); 
    it('should return empty/null price field with null state when receiving UPDATE_COST_PRICE_FIELD action with invalid price from empty', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_COST_PRICE_FIELD,
            price: "s"
        });
        expect(returnValue.selectedItem.costPrice.value).toBeNull;
        expect(returnValue.selectedItem.costPrice.state).toBeNull;
    });
    it('should return modified price field including point value with success state when receiving UPDATE_COST_PRICE_FIELD action with decimal price', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_COST_PRICE_FIELD,
            price: "20."
        });
        expect(returnValue.selectedItem.costPrice.value).toEqual("20.");
        expect(returnValue.selectedItem.costPrice.state).toEqual("success");
    });
    it('should return modified price field including decimal value with success state when receiving UPDATE_COST_PRICE_FIELD action with decimal price', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_COST_PRICE_FIELD,
            price: "20.2"
        });
        expect(returnValue.selectedItem.costPrice.value).toEqual("20.2");
        expect(returnValue.selectedItem.costPrice.state).toEqual("success");
    });
    it('should return the modified qty field with success state when receiving UPDATE_QTY_FIELD action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: dummyQty
        });
        expect(returnValue.selectedItem.qty.value).toEqual(dummyQty);
        expect(returnValue.selectedItem.qty.state).toEqual("success");
    });   
    it('should return NaN qty field with null state when receiving UPDATE_QTY_FIELD action with empty qty', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: ""
        });
        expect(returnValue.selectedItem.qty.value).toEqual(NaN);
        expect(returnValue.selectedItem.qty.state).toBeNull();
    });  
    it('should return the last valid qty field with success state when receiving UPDATE_QTY_FIELD action with invalid qty', () => {
        const returnValue = itemSelectionForm({
            selectedItem: {
                qty: {
                    value: 15,
                    state: "success"
                }
            }
        }, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: "15s"
        });
        expect(returnValue.selectedItem.qty.value).toEqual(15);
        expect(returnValue.selectedItem.qty.state).toEqual("success");
    }); 
    it('should return NaN or null qty field with null state when receiving UPDATE_QTY_FIELD action with invalid qty from empty', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_QTY_FIELD,
            qty: "s"
        });
        expect(returnValue.selectedItem.qty.value).toEqual(NaN);
        expect(returnValue.selectedItem.qty.state).toBeNull;
    });
    it('should return the modified name field with success state when receiving UPDATE_BARCODE_FIELD action', () => {
        const returnValue = itemSelectionForm(undefined, {
            type: actionTypes.UPDATE_BARCODE_FIELD,
            barcode: dummyBarcode
        });
        expect(returnValue.barcodeField).toEqual(dummyBarcode);
    });
    it('should return the empty name field with null state when receiving UPDATE_BARCODE_FIELD action with empty firstName', () => {
        const returnValue = itemSelectionForm({
            barcodeField: "123456789"
        }, {
            type: actionTypes.UPDATE_BARCODE_FIELD,
            barcode: ""
        });
        expect(returnValue.barcodeField).toEqual("");
    });
    it('should reset to initial state when receiving ', () => {
        const returnValue = itemSelectionForm({
            selectedItem: {
                costPrice: {
                    value: "15",
                    state: "success"
                }
            }
        }, {
            type: actionTypes.ADD_STOCKING_RECORD_TO_LIST,
            item: dummyItem
        });
        assertInitialState(returnValue);
    });
    it('should return null barcode field when receiving INITIATE_BARCODE_SCANNING', () => {
        const returnValue = itemSelectionForm({
            barcodeField: "123456789"
        }, {
            type: actionTypes.INITIATE_BARCODE_SCANNING,
        });
        expect(returnValue.barcodeField).toBeNull();
    });
    it('should return shoppingFormVisible opened when receiving SHOW_SHOPPING_FORM', () => {
        const returnValue = itemSelectionForm({
            shoppingFormVisible: false
        }, {
            type: actionTypes.SHOW_SHOPPING_FORM,
        });
        expect(returnValue.shoppingFormVisible).toBeTruthy();
    });
    it('should return shoppingFormVisible opened when receiving SELECT_ITEM', () => {
        const returnValue = itemSelectionForm({
            shoppingFormVisible: false
        }, {
            type: actionTypes.SELECT_ITEM,
            barcode: dummyBarcode,
            items: dummyItems
        });
        expect(returnValue.shoppingFormVisible).toBeTruthy();
    });
    it('should return shoppingFormVisible closed when receiving SELECT_ITEM_AND_ADD', () => {
        const returnValue = itemSelectionForm({
            shoppingFormVisible: true
        }, {
            type: actionTypes.SELECT_ITEM_AND_ADD,
            barcode: dummyBarcode,
            items: dummyItems
        });
        expect(returnValue.shoppingFormVisible).toBeFalsy();
    });
});