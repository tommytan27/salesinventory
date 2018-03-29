const testItemSelectionForm = {
    barcodeEditable: true,
    selectedItem: {
        supplierId: 1,
        brandId: 1,
        barcode: null,
        sellPrice: {
            value: null,
            state: null
        },
        costPrice: {
            value: null,
            state: null
        },
        qty: {
            value: null,
            state: null
        }
    },
    addableItem: false
};

const itemSelectionFor = (state = [], action) => {
    return testItemSelectionForm;
}

export default itemSelectionFor;