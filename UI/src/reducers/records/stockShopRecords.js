import actionTypes from './../../constants/actionTypes';

const stockShopRecords = (state = [], action) => {
    switch (action.type) {
        case actionTypes.REMOVE_STOCKING_RECORD_FROM_LIST:
            return state.filter((record) => {
                return record.id !== action.recordId
            });
        case actionTypes.ADD_STOCKING_RECORD_TO_LIST:
            let newItem = {
                id: state.length + 1,
                barcode: action.item.barcode,
                qty: action.item.qty.value,
                sellPrice: parseFloat(action.item.sellPrice.value),
                costPrice: parseFloat(action.item.costPrice.value)
            }
            return [...state, newItem];
        case actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT:
        case actionTypes.CHANGE_MODE_USER:
        case actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU:
        case actionTypes.ADD_STOCK:
        case actionTypes.ADD_CREDIT:
        case actionTypes.ADD_SALES:
        case actionTypes.SERVER_ADD_CREDIT:
        case actionTypes.SERVER_ADD_SALES:
        case actionTypes.SERVER_ADD_STOCK:
            return [];
        default:
            return state;
    }
}

export default stockShopRecords;