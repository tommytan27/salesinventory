const testItems = [
    {
        barcode: "1153135151", name: "Salted Chicken", supplierId: 1, 
        brandId: 1, price: 9.00, costPrice: 8.50, vegan: true, qty: 2
    },
    {
        barcode: "1531831812", name: "Soy Nugget", supplierId: 2, 
        brandId: 2, price: 8.50, costPrice: 7.50, vegan: true, qty: 5
    },
    {
        barcode: "3531312151", name: "ItemX", supplierId: 3, 
        brandId: 3, price: 13.00, costPrice: 11.50, vegan: false, qty: 8
    }
];

const items = (state = [], action) => {
    return testItems;
}

export default items;