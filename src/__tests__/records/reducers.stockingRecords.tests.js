import stockingRecords from "../../reducers/records/stockingRecords";
import actionTypes from "../../constants/actionTypes";

var fakeStockingRecords = [
    {id: 1, barcode: "1153135151", qty: 2, sellPrice: 9.50, costPrice: 8.75},
    {id: 2, barcode: "1531831812", qty: 3, sellPrice: 8.50, costPrice: 7.50},
    {id: 3, barcode: "3531312151", qty: 1, sellPrice: 15.00, costPrice: 13.00}
];

describe('StockingRecord Store', () => {
    it ('should return initial state of 3 stockingRecords', () => {
        expect(stockingRecords(undefined, {})).toHaveLength(3);
    });
    it ('should return updated stocking records list when receiving ', () => {
        const returnValue = stockingRecords(fakeStockingRecords, {
            type: actionTypes.REMOVE_STOCKING_RECORD_FROM_LIST,
            recordId: 2
        });
        expect(returnValue).toHaveLength(2);
        expect(returnValue[0].id).toBe(1);
        expect(returnValue[1].id).toBe(3);
    })
});