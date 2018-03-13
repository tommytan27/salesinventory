const testStocks = [
    {id: "20180224144820", date: "2018/02/24", details: [
        {barcode: "1153135151", qty: 1},
        {barcode: "1531831812", qty: 1}
    ]},
    {id: "20180224114810", date: "2018/02/24", details: [
        {barcode: "1153135151", qty: 2},
        {barcode: "3531312151", qty: 3}
    ]},
    {id: "20180114102520", date: "2018/01/14", details: [
        {barcode: "3531312151", qty: 5},
        {barcode: "1153135151", qty: 6}
    ]}
];

const stocks = (state = [], action) => {
    return testStocks;
}

export default stocks;