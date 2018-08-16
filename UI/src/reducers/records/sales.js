import actionTypes from './../../constants/actionTypes';

const sales = (state = [], action) => {
    switch (action.type) {
        case actionTypes.UPDATE_RECORDS:
            return [...action.records.sales];
        case actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY:
            return [];
        default:
            return state;
    }
}

export default sales;