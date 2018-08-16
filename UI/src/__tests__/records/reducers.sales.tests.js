import sales from "../../reducers/records/sales";
import actionTypes from './../../constants/actionTypes';

const dummySales = {
    id: "20180224144820", date: "2018/02/24", customerId: 1, details: [
        {barcode: "1153135151", qty: 1},
        {barcode: "1531831812", qty: 1}
]};

describe('Sales Store', () => {
    it('should return the list of sales with updated sales when receiving UPDATE_RECORDS action', () => {
        var returnValues = sales(undefined, {
            type: actionTypes.UPDATE_RECORDS,
            records: {
                sales: [ dummySales ]
            } 
        });
        expect(returnValues).toHaveLength(1);
    });

    it('should return empty sales when receiving action CHANGE_PAGE_ADMIN_RECORDS_HISTORY', () => {
        var returnValues = sales([ dummySales ], {
            type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
        });
        expect(returnValues).toHaveLength(0);
    });
});