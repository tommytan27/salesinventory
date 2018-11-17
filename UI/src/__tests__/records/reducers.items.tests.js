import items from "../../reducers/records/items";
import actionTypes from './../../constants/actionTypes';

const initialLength = 0;

const dummyStock = {
    id: "20180224144820", date: "2018/02/24", details: [
        {barcode: "1153135151", qty: 4, sellPrice: 9.50, costPrice: 8.75},
        {barcode: "1531831812", qty: 1, sellPrice: 8.50, costPrice: 7.50}
]};

const dummySalesCredit = {
    id: "20180224144820", date: "2018/02/24", customerId: 1, details: [
        {barcode: "1153135151", qty: 4, sellPrice: 9.50, costPrice: 8.75},
        {barcode: "1531831812", qty: 1, sellPrice: 8.50, costPrice: 7.50}
]};

describe('Items Store', () => {
    it('should return the list of items with the added item when receiving ADD_ITEM action', () => {
        const expectedItem = {
            barcode: "12345678", name: "Item", supplierId: 1, 
            brandId: 1, price: 9.00, costPrice: 8.50, vegan: true, qty: 2
        };
        var returnValues = items(undefined, {
            type: actionTypes.ADD_ITEM,
            item: expectedItem
        });
        expect(returnValues).toHaveLength(initialLength + 1);
        expect(returnValues[initialLength].barcode).toEqual(expectedItem.barcode);
        expect(returnValues[initialLength].name).toEqual(expectedItem.name);
        expect(returnValues[initialLength].supplierId).toEqual(expectedItem.supplierId);
        expect(returnValues[initialLength].brandId).toEqual(expectedItem.brandId);
        expect(returnValues[initialLength].price).toEqual(expectedItem.price);
        expect(returnValues[initialLength].costPrice).toEqual(0);
        expect(returnValues[initialLength].vegan).toEqual(expectedItem.vegan);
        expect(returnValues[initialLength].qty).toEqual(expectedItem.qty);
    });
    it('should return the list of items with the modified item when receiving SAVE_ITEM action', () => {
        const expectedItem = {
            barcode: "12345678", name: "Item", supplierId: 1, 
            brandId: 1, price: 9.00, costPrice: 8.50, vegan: true, qty: 2
        };
        var returnValues = items([{
            barcode: "12345678", name: "Dummy", supplierId: 3, 
            brandId: 3, price: 10.00, costPrice: 9.50, vegan: true, qty: 0
        }], {
            type: actionTypes.SAVE_ITEM,
            item: expectedItem
        });
        expect(returnValues).toHaveLength(1);
        expect(returnValues[0].barcode).toEqual(expectedItem.barcode);
        expect(returnValues[0].name).toEqual(expectedItem.name);
        expect(returnValues[0].supplierId).toEqual(expectedItem.supplierId);
        expect(returnValues[0].brandId).toEqual(expectedItem.brandId);
        expect(returnValues[0].price).toEqual(expectedItem.price);
        expect(returnValues[0].costPrice).toEqual(9.50);
        expect(returnValues[0].vegan).toEqual(expectedItem.vegan);
        expect(returnValues[0].qty).toEqual(expectedItem.qty);
    });
    it('should return the list of items with the modified item when receiving DELETE_ITEM action', () => {
        var returnValues = items([{
            barcode: "12345678", name: "Dummy", supplierId: 3, 
            brandId: 3, price: 10.00, costPrice: 9.50, vegan: true, qty: 0
        }], {
            type: actionTypes.DELETE_ITEM,
            barcode: "12345678"
        });
        expect(returnValues).toHaveLength(0);
    });
    it('should return the updated list of items when receiving UPDATE_ITEMS action', () => {
        const updatedItems = [{
            barcode: "12345678", name: "Item", supplierId: 1, 
            brandId: 1, price: 9.00, costPrice: 8.50, vegan: true, qty: 2
        },{
            barcode: "98765432", name: "Item", supplierId: 2, 
            brandId: 1, price: 10.00, costPrice: 9.50, vegan: false, qty: 5
        }];
        var returnValues = items(undefined, {
            type: actionTypes.UPDATE_ITEMS,
            items: updatedItems
        });
        expect(returnValues).toHaveLength(2);
        expect(returnValues[0].barcode).toEqual(updatedItems[0].barcode);
        expect(returnValues[0].name).toEqual(updatedItems[0].name);
        expect(returnValues[0].supplierId).toEqual(updatedItems[0].supplierId);
        expect(returnValues[0].brandId).toEqual(updatedItems[0].brandId);
        expect(returnValues[0].price).toEqual(updatedItems[0].price);
        expect(returnValues[0].costPrice).toEqual(updatedItems[0].costPrice);
        expect(returnValues[0].vegan).toEqual(updatedItems[0].vegan);
        expect(returnValues[0].qty).toEqual(updatedItems[0].qty);
        expect(returnValues[0].barcode).toEqual(updatedItems[0].barcode);
        expect(returnValues[1].name).toEqual(updatedItems[1].name);
        expect(returnValues[1].supplierId).toEqual(updatedItems[1].supplierId);
        expect(returnValues[1].brandId).toEqual(updatedItems[1].brandId);
        expect(returnValues[1].price).toEqual(updatedItems[1].price);
        expect(returnValues[1].costPrice).toEqual(updatedItems[1].costPrice);
        expect(returnValues[1].vegan).toEqual(updatedItems[1].vegan);
        expect(returnValues[1].qty).toEqual(updatedItems[1].qty);
    });
    it('should return the updated list of items when receiving UPDATE_ITEMS_AND_CUSTOMER action', () => {
        const updatedItems = [{
            barcode: "12345678", name: "Item", supplierId: 1, 
            brandId: 1, price: 9.00, costPrice: 8.50, vegan: true, qty: 2
        },{
            barcode: "98765432", name: "Item", supplierId: 2, 
            brandId: 1, price: 10.00, costPrice: 9.50, vegan: false, qty: 5
        }];
        var returnValues = items(undefined, {
            type: actionTypes.UPDATE_ITEMS_AND_CUSTOMER,
            items: updatedItems,
            customer: null
        });
        expect(returnValues).toHaveLength(2);
        expect(returnValues[0].barcode).toEqual(updatedItems[0].barcode);
        expect(returnValues[0].name).toEqual(updatedItems[0].name);
        expect(returnValues[0].supplierId).toEqual(updatedItems[0].supplierId);
        expect(returnValues[0].brandId).toEqual(updatedItems[0].brandId);
        expect(returnValues[0].price).toEqual(updatedItems[0].price);
        expect(returnValues[0].costPrice).toEqual(updatedItems[0].costPrice);
        expect(returnValues[0].vegan).toEqual(updatedItems[0].vegan);
        expect(returnValues[0].qty).toEqual(updatedItems[0].qty);
        expect(returnValues[0].barcode).toEqual(updatedItems[0].barcode);
        expect(returnValues[1].name).toEqual(updatedItems[1].name);
        expect(returnValues[1].supplierId).toEqual(updatedItems[1].supplierId);
        expect(returnValues[1].brandId).toEqual(updatedItems[1].brandId);
        expect(returnValues[1].price).toEqual(updatedItems[1].price);
        expect(returnValues[1].costPrice).toEqual(updatedItems[1].costPrice);
        expect(returnValues[1].vegan).toEqual(updatedItems[1].vegan);
        expect(returnValues[1].qty).toEqual(updatedItems[1].qty);
    });
});