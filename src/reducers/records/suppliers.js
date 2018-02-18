const testSuppliers = [
    {id: 1, name: "Lamyong", contact: "96321195"},
    {id: 2, name: "Ettason", contact: "97282288"},
    {id: 3, name: "SupplierX", contact: "99582813"}
];

const suppliers = (state = [], action) => {
    return testSuppliers;
}

export default suppliers;