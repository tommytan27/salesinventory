const testBrands = [
    {id: 1, name: "Lamyong"},
    {id: 2, name: "Ettason"},
    {id: 3, name: "SupplierX", contact: "99582813"}
];

const brands = (state = [], action) => {
    return testBrands;
}

export default brands;