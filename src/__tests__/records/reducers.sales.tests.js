import sales from "../../reducers/records/sales";
import actionTypes from './../../constants/actionTypes';

const dummySales = {
    id: "20180224144820", date: "2018/02/24", customerId: 1, details: [
        {barcode: "1153135151", qty: 1},
        {barcode: "1531831812", qty: 1}
]};

describe('Sales Store', () => {
    it('should return the list of sales with added sales when receiving ADD_SALES action', () => {
        var returnValues = sales(undefined, {
            type: actionTypes.ADD_SALES,
            sales: dummySales
        });
        expect(returnValues).toHaveLength(1);
    });
});