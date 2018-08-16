import actionTypes from '../../constants/actionTypes';
import dialogTitles from '../../constants/dialogTitles';
import dialogModes from '../../constants/dialogModes';

const initialState = {
    open: false,
    recordsDetails: []
};

const recordsDetailsDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_RECORDS_DETAILS_DIALOG:
            return { ...state,
                open: true,
                recordsDetails: action.recordsDetails
            };
        case actionTypes.CLOSE_RECORDS_DETAILS_DIALOG:
            return initialState;
        default:
            return state;
    }
}

export default recordsDetailsDialogs;