import actionTypes from '../../constants/actionTypes';

const initialState = {
    open: false,
    fromDate: null,
    toDate: null,
    customerId: null
}

const searchDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY:
        case actionTypes.OPEN_SEARCH_DIALOG:
            var today = new Date();
            var year = today.getFullYear(), month = today.getMonth();
            return { ...state,
                open: true,
                fromDate: new Date(year, month, 1).toLocaleDateString("en-ZA"),
                toDate: today.toLocaleDateString("en-ZA"),
                customerId: -1
            };
        case actionTypes.CLOSE_SEARCH_DIALOG:
        case actionTypes.UPDATE_RECORDS:
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