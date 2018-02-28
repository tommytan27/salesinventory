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
                fromDate: today.toLocaleDateString("en-ZA"),
                toDate: today.toLocaleDateString("en-ZA"),
                customerId: -1
            };
        case actionTypes.CLOSE_SEARCH_DIALOG:
            return initialState;
        case actionTypes.UPDATE_CUSTOMER_COMBO:
            return { ...state,
                customerId: action.customerId
            };
        case actionTypes.UPDATE_FROM_DATE_FIELD:
            return { ...state,
                fromDate: action.fromDate
            };
        case actionTypes.UPDATE_TO_DATE_FIELD:
            return { ...state,
                toDate: action.toDate
            };
        default:
            return state;
    }
}

export default searchDialogs;