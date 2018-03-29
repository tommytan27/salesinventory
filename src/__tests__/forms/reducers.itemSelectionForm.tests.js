import itemSelectionForm from './../../reducers/forms/itemSelectionForm';

const assertInitialState = (returnValue) => {
    expect(returnValue.barcodeEditable).toBeTruthy();
    expect(returnValue.selectedItem.supplierId).toBe(1);
    expect(returnValue.selectedItem.brandId).toBe(1);
    expect(returnValue.selectedItem.barcode).toBeNull();
    expect(returnValue.selectedItem.sellPrice.value).toBeNull();
    expect(returnValue.selectedItem.costPrice.value).toBeNull();
    expect(returnValue.selectedItem.qty.value).toBeNull();
    expect(returnValue.selectedItem.sellPrice.state).toBeNull();
    expect(returnValue.selectedItem.costPrice.state).toBeNull();
    expect(returnValue.selectedItem.qty.state).toBeNull();
    expect(returnValue.addableItem).toBeFalsy();
}

describe('ItemSelectionForm Store', () => {
    it('should return initial state of supplier, brand, and items set to the first option', () => {
        const returnValue = itemSelectionForm(undefined, null);
        assertInitialState(returnValue);
    });
});