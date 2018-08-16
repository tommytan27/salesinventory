import credits from "../../reducers/records/credits";
import actionTypes from './../../constants/actionTypes';

const dummyCredit = {
    id: "20180224144820", date: "2018/02/24", customerId: 1, details: [
        {barcode: "1153135151", qty: 1},
        {barcode: "1531831812", qty: 1}
]};

describe('Credits Store', () => {
    it('should return the list of credits with updated credits when receiving UPDATE_RECORDS action', () => {
        var returnValues = credits(undefined, {
            type: actionTypes.UPDATE_RECORDS,
            records: {
                credits: [ dummyCredit ]
            } 
        });
        expect(returnValues).toHaveLength(1);
    });

    it('should return empty credit when receiving action CHANGE_PAGE_ADMIN_RECORDS_HISTORY', () => {
        var returnValues = credits([ dummyCredit ], {
            type: actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY
        });
        expect(returnValues).toHaveLength(0);
    });
});