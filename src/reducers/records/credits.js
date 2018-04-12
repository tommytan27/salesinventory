const testCredits = [
    // {id: "20180224144820", date: "2018/02/24", customerId: 0, details: [
    //     {barcode: "1153135151", qty: 3},
    //     {barcode: "1531831812", qty: 5}
    // ]},
    // {id: "20180224114810", date: "2018/02/24", customerId: 0, details: [
    //     {barcode: "1153135151", qty: 2},
    //     {barcode: "3531312151", qty: 8}
    // ]},
    // {id: "20180114102520", date: "2018/01/14", customerId: 0, details: [
    //     {barcode: "3531312151", qty: 1},
    //     {barcode: "1153135151", qty: 5}
    // ]}
];

const credits = (state = [], action) => {
    return testCredits;
}

export default credits;