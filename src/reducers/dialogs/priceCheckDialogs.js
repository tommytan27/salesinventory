import actionTypes from '../../constants/actionTypes';
import { validateDecimal } from '../../utils/validators';

const initialState = {
    open: false,
    barcode: null,
    selectedItem: {
        name: null,
        price: null,
        vegan: null
    }
}

const priceCheckDialogs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_PRICE_CHECK_DIALOG:
            return { ...state, open: true };
        case actionTypes.CHANGE_PAGE_USER_MAIN_MENU:
        case actionTypes.CLOSE_PRICE_CHECK_DIALOG:
            return initialState;
        case actionTypes.UPDATE_BARCODE_FIELD:
            return {...state, barcode: action.barcode};
        case actionTypes.INITIATE_BARCODE_SCANNING:
            return {...state, barcode: null};
        case actionTypes.SELECT_ITEM:
            let selectedItem = action.items.find((item) => {
                return item.barcode === action.barcode;
            });
            return {...state,
                selectedItem: {
                    name: selectedItem ? selectedItem.name : null,
                    price: selectedItem ? selectedItem.price : null,
                    vegan: selectedItem ? selectedItem.vegan : null
                }};
        default:
            return state;
    }
}

export default priceCheckDialogs;