import actionTypes from "../../constants/actionTypes";

const testStockingRecords = [
    {id: 1, barcode: "1153135151", qty: 2, sellPrice: 9.50, costPrice: 8.75},
    {id: 2, barcode: "1531831812", qty: 3, sellPrice: 8.50, costPrice: 7.50},
    {id: 3, barcode: "3531312151", qty: 1, sellPrice: 15.00, costPrice: 13.00}
];

const stockingRecords = (state = [], action) => {
    switch (action.type) {
        case actionTypes.REMOVE_STOCKING_RECORD_FROM_LIST:
            return state.filter((record) => {
                return record.id !== action.recordId
            });
        default:
            return testStockingRecords;
    }
}

export default stockingRecords;