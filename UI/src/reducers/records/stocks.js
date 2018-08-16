import actionTypes from './../../constants/actionTypes';
    
const stocks = (state = [], action) => {
    switch (action.type) {
        case actionTypes.UPDATE_RECORDS:
            return [...action.records.stocks];
        case actionTypes.CHANGE_PAGE_ADMIN_RECORDS_HISTORY:
            return [];
        default:
            return state;
    }
}

export default stocks;