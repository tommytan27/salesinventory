import actionTypes from "../../constants/actionTypes";

const stockingRecords = (state = [], action) => {
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
        default:
            return state;
    }
}

export default stockingRecords;