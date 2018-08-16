import recordsDetailsDialog from './../../reducers/dialogs/recordsDetailsDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogModes from './../../constants/dialogModes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialState = (state, action) => {    
    expect(recordsDetailsDialog(state, action).open).toBeFalsy();
    expect(recordsDetailsDialog(state, action).recordsDetails).not.toBeNull();
    expect(recordsDetailsDialog(state, action).recordsDetails.length).toEqual(0);
}

const dummyRecordsDetails = [
    {barcode: "1153135151", qty: 2},
    {barcode: "3531312151", qty: 2}
];

describe('RecordsDetailsDialog', () => {
    it ('should return all null values at the initial state', () => {
        assertInitialState(undefined, {});
    });
    it ('should return the dialog open when receiving OPEN_RECORDS_DETAILS_DIALOG action', () => {
        var returnValues = recordsDetailsDialog(undefined, {
            type: actionTypes.OPEN_RECORDS_DETAILS_DIALOG,
            recordsDetails: dummyRecordsDetails
        });
        expect(returnValues.open).toBeTruthy();
    });
    it ('should return the selected records details when receiving OPEN_RECORDS_DETAILS_DIALOG action', () => {
        var returnValues = recordsDetailsDialog(undefined, {
            type: actionTypes.OPEN_RECORDS_DETAILS_DIALOG,
            recordsDetails: dummyRecordsDetails
        });
        expect(returnValues.recordsDetails).toBe(dummyRecordsDetails);
        expect(returnValues.recordsDetails.length).toEqual(2);
    });
    it ('should return initial state when receiving CLOSE_RECORDS_DETAILS_DIALOG action', () => {
        assertInitialState(undefined, {
            type: actionTypes.CLOSE_RECORDS_DETAILS_DIALOG
        })
    });
});