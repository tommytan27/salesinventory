const testStocks = [
    // {id: "20180224144820", date: "2018/02/24", details: [
    //     {barcode: "1153135151", qty: 1, sellPrice: 9.50, costPrice: 8.75},
    //     {barcode: "1531831812", qty: 1, sellPrice: 8.50, costPrice: 7.50}
    // ]},
    // {id: "20180224114810", date: "2018/02/24", details: [
    //     {barcode: "1153135151", qty: 2, sellPrice: 9.00, costPrice: 8.50},
    //     {barcode: "3531312151", qty: 3, sellPrice: 13.00, costPrice: 11.00}
    // ]},
    // {id: "20180114102520", date: "2018/01/14", details: [
    //     {barcode: "3531312151", qty: 5, sellPrice: 15.00, costPrice: 13.00},
    //     {barcode: "1153135151", qty: 6, sellPrice: 10.00, costPrice: 9.00}
    // ]}
];

const stocks = (state = [], action) => {
    return testStocks;
}

export default stocks;