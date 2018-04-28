import stocks from "../../reducers/records/stocks";
import actionTypes from "../../constants/actionTypes";

const dummyStock = {
    id: "20180224144820", date: "2018/02/24", details: [
        {barcode: "1153135151", qty: 1, sellPrice: 9.50, costPrice: 8.75},
        {barcode: "1531831812", qty: 1, sellPrice: 8.50, costPrice: 7.50}
]};

describe('Stock Store', () => {
    it('should return the list of stocks with added stock when receiving ADD_STOCK action', () => {
        var returnValues = stocks(undefined, {
            type: actionTypes.ADD_STOCK,
            stock: dummyStock
        });
        expect(returnValues).toHaveLength(1);
    });
});