import actionTypes from '../../constants/actionTypes';
import dialogTitles from '../../constants/dialogTitles';
import dialogModes from '../../constants/dialogModes';

const initialState = {
    open: false,
    title: null,
    recordsDetails: []
};

const recordsDetailsDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_RECORDS_DETAILS_DIALOG:
            return { ...state,
                open: true,
                title: dialogTitles.SALES_DETAILS,
                recordsDetails: action.recordsDetails
            };
        case actionTypes.CLOSE_RECORDS_DETAILS_DIALOG:
            return initialState;
        default:
            return state;
    }
}

export default recordsDetailsDialogs;