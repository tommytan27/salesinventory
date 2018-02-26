import actionTypes from '../../constants/actionTypes';
import dialogTitles from '../../constants/dialogTitles';
import dialogModes from '../../constants/dialogModes';

const initialState = {
    open: false,
    fromDate: null,
    toDate: null,
    customerId: null
}

const searchDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_SEARCH_DIALOG:
            var today = new Date();
            return { ...state,
                open: true,
                fromDate: today.toLocaleDateString('ja-JP'),
                toDate: today.toLocaleDateString('ja-JP'),
                customerId: -1
            }
        case actionTypes.CLOSE_SEARCH_DIALOG:
            return initialState;
        default:
            return state;
    }
}

export default searchDialogs;