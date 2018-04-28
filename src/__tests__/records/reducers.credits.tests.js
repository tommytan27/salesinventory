import credits from "../../reducers/records/credits";
import actionTypes from './../../constants/actionTypes';

const dummyCredit = {
    id: "20180224144820", date: "2018/02/24", customerId: 1, details: [
        {barcode: "1153135151", qty: 1},
        {barcode: "1531831812", qty: 1}
]};

describe('Credits Store', () => {
    it('should return the list of credits with added credit when receiving ADD_SALES action', () => {
        var returnValues = credits(undefined, {
            type: actionTypes.ADD_CREDIT,
            credit: dummyCredit
        });
        expect(returnValues).toHaveLength(1);
    });
});