const testStockingRecords = [
    {barcode: "1153135151", qty: 2},
    {barcode: "1531831812", qty: 3},
    {barcode: "1531831812", qty: 1}
];

const stockingRecords = (state = [], action) => {
    return testStockingRecords;
}

export default stockingRecords;