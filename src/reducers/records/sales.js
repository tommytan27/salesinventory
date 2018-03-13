const testSales = [
    {id: "20180224114810", date: "2018/02/24", customerId: 1, salesDetails: [
        {barcode: "1153135151", qty: 2},
        {barcode: "3531312151", qty: 2}
    ]},
    {id: "20180224144820", date: "2018/02/24", customerId: 2, salesDetails: [
        {barcode: "1153135151", qty: 3},
        {barcode: "1531831812", qty: 1}
    ]},
    {id: "20180114102520", date: "2018/01/14", customerId: 3, salesDetails: [
        {barcode: "3531312151", qty: 4},
        {barcode: "1153135151", qty: 5}
    ]}
];

const sales = (state = [], action) => {
    return testSales;
}

export default sales;