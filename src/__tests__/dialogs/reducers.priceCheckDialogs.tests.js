import priceCheckDialogs from './../../reducers/dialogs/priceCheckDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialState = (state, action) => {    
    expect(priceCheckDialogs(state, action).open).toBeFalsy();
    expect(priceCheckDialogs(state, action).barcode).toBeNull();
    expect(priceCheckDialogs(state, action).selectedItem.name).toBeNull();
    expect(priceCheckDialogs(state, action).selectedItem.price).toBeNull();
    expect(priceCheckDialogs(state, action).selectedItem.vegan).toBeNull();
}

const dummyBarcode = "1531831812";

const dummyItems = [
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

describe('PriceCheckDialog', () => {
    it ('should return the dialog closed at the initial state', () => {
        assertInitialState(undefined, {});
    });
    it ('should return the dialog open when receiving OPEN_PRICE_CHECK_DIALOG action', () => {
        var returnValues = priceCheckDialogs(undefined, {
            type: actionTypes.OPEN_PRICE_CHECK_DIALOG
        });
        expect(returnValues.open).toBeTruthy();
    });
    it ('should return initial state when receiving CLOSE_PRICE_CHECK_DIALOG action', () => {
        assertInitialState(undefined, {
            type: actionTypes.CLOSE_PRICE_CHECK_DIALOG
        })
    });
    it ('should return initial state after opening dialog when receiving CLOSE_PRICE_CHECK_DIALOG action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.CLOSE_PRICE_CHECK_DIALOG
        })
    });
    it ('should return initial state after opening dialog when receiving CHANGE_PAGE_USER_MAIN_MENU action', () => {
        assertInitialState({
            open: true
        }, {
            type: actionTypes.CHANGE_PAGE_USER_MAIN_MENU
        })
    });
    it ('should return modified barcode when receiving UPDATE_BARCODE_FIELD action', () => {
        let returnValues = priceCheckDialogs(undefined, {
            type: actionTypes.UPDATE_BARCODE_FIELD,
            barcode: "12342424"
        });
        expect(returnValues.barcode).toEqual("12342424");
    });
    it ('should return null barcode when receiving INITIATE_BARCODE_SCANNING action', () => {
        let returnValues = priceCheckDialogs(undefined, {
            type: actionTypes.INITIATE_BARCODE_SCANNING
        });
        expect(returnValues.barcode).toBeNull;
    });
    it ('should return selected item when receiving SELECT_ITEM action', () => {
        let returnValues = priceCheckDialogs(undefined, {
            type: actionTypes.SELECT_ITEM,
            barcode: dummyBarcode,
            items: dummyItems
        });
        expect(returnValues.selectedItem.name).toEqual("Soy Nugget");
        expect(returnValues.selectedItem.price).toEqual(8.50);
        expect(returnValues.selectedItem.vegan).toBeTruthy();
    });
    it ('should return null item when receiving SELECT_ITEM action where the item cannot be found', () => {
        let returnValues = priceCheckDialogs(undefined, {
            type: actionTypes.SELECT_ITEM,
            barcode: "123423",
            items: dummyItems
        });
        expect(returnValues.selectedItem.name).toBeNull;
        expect(returnValues.selectedItem.price).toBeNull;
        expect(returnValues.selectedItem.vegan).toBeNull;
    });
});