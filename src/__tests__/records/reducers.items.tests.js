import items from "../../reducers/records/items";
import actionTypes from './../../constants/actionTypes';

const initialLength = 0;

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
});