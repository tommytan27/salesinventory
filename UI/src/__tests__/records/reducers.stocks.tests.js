import stocks from "../../reducers/records/stocks";
import actionTypes from "../../constants/actionTypes";

const dummyStock = {
    id: "20180224144820", date: "2018/02/24", details: [
        {barcode: "1153135151", qty: 1, sellPrice: 9.50, costPrice: 8.75},
        {barcode: "1531831812", qty: 1, sellPrice: 8.50, costPrice: 7.50}
]};

fdescribe('Stock Store', () => {
    it('should return the list of stocks with updated stocks when receiving UPDATE_RECORDS action', () => {
        var returnValues = stocks(undefined, {
            type: actionTypes.UPDATE_RECORDS,
            records: {
                stocks: [ dummyStock ]
            } 
        });
        expect(returnValues).toHaveLength(1);
    });

    it('should return empty stock when receiving action CHANGE_PAGE_ADMIN_RECORDS_HISTORY', () => {
        var returnValues = stocks([ dummyStock ], {
            type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
        });
        expect(returnValues).toHaveLength(0);
    });
});