import actionTypes from "../../constants/actionTypes";
import { validateDecimal } from '../../utils/validators';

const initialState = {
    barcodeEditable: true,
    barcodeField: null,
    shoppingFormVisible: false,
    addableItem: false,
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
    autoAdd: false
};

const getAddableItem = (state) => {
    let selectedItem = state.selectedItem;
    return selectedItem.supplierId && selectedItem.brandId && selectedItem.barcode &&
        selectedItem.sellPrice.state === "success" && selectedItem.costPrice.state === "success" &&
        selectedItem.qty.state === "success";
}

const getItem = (barcode, items) => {
    let matchingItem = items.find((item) => {
        return item.barcode === barcode;
    });

    if (matchingItem) {
        return matchingItem;
    }
    
    return {
        barcode: null,
        supplierId: 1,
        brandId: 1,
        price: null,
        costPrice: null
    }
}

const getAutoAdd = (barcode, actionType) => {
    return (barcode && actionType === actionTypes.SELECT_ITEM_AND_ADD);
}

const itemSelectionForm = (state = initialState, action) => {
    var temp;
    switch(action.type) {
        case actionTypes.SELECT_SUPPLIER:
            temp = {...state, selectedItem: {
                ...state.selectedItem, supplierId: action.supplierId
            }};
            return {...temp, addableItem: getAddableItem(temp)};
        case actionTypes.SELECT_BRAND:
            temp = {...state, selectedItem: {
                ...state.selectedItem, brandId: action.brandId
            }};
            return {...temp, addableItem: getAddableItem(temp)};
        case actionTypes.SELECT_ITEM_AND_ADD:
        case actionTypes.SELECT_ITEM:
            let matchingItem = getItem(action.barcode, action.items);
            temp = {...state, barcodeField: matchingItem.barcode,
                autoAdd: getAutoAdd(matchingItem.barcode, action.type), 
                shoppingFormVisible: action.type === actionTypes.SELECT_ITEM,
                selectedItem: {
                    ...state.selectedItem,
                    supplierId: matchingItem.supplierId,
                    brandId: matchingItem.brandId, 
                    barcode: matchingItem.barcode,
                    sellPrice: {
                        value: matchingItem.price ? matchingItem.price.toString() : null,
                        state: matchingItem.price ? "success" : null
                    },
                    costPrice: {
                        value: matchingItem.costPrice ? matchingItem.costPrice.toString() : null,
                        state: matchingItem.costPrice ? "success" : null
                    },
                    qty:{
                        value: matchingItem.barcode ? 1 : null,
                        state: matchingItem.barcode ? "success" : null
                    }
                }};
            return {...temp, addableItem: getAddableItem(temp)};
        case actionTypes.UPDATE_BARCODE_FIELD:
            return {...state, barcodeField: action.barcode};
        case actionTypes.UPDATE_QTY_FIELD:
            temp = {...state, selectedItem: {
                ...state.selectedItem, qty: {
                    value: Number.parseInt(action.qty),
                    state: Number.parseInt(action.qty) ? "success" : null
                }
            }};
            return {...temp, addableItem: getAddableItem(temp)};
        case actionTypes.UPDATE_SELL_PRICE_FIELD:
            temp = {...state, selectedItem: {
                ...state.selectedItem, sellPrice: {
                    value: validateDecimal(action.price) ? action.price : state.selectedItem.sellPrice.value,
                    state: action.price ? (validateDecimal(action.price) ? "success" : state.selectedItem.sellPrice.state) : null
                }
            }};
            return {...temp, addableItem: getAddableItem(temp)};
        case actionTypes.UPDATE_COST_PRICE_FIELD:
            temp = {...state, selectedItem: {
                ...state.selectedItem, costPrice: {
                    value: validateDecimal(action.price) ? action.price : state.selectedItem.costPrice.value,
                    state: action.price ? (validateDecimal(action.price) ? "success" : state.selectedItem.costPrice.state) : null
                }
            }};
            return {...temp, autoAdd: false, addableItem: getAddableItem(temp)};
        case actionTypes.ADD_STOCKING_RECORD_TO_LIST:
            return initialState;
        case actionTypes.INITIATE_BARCODE_SCANNING:
            return {...state, barcodeField: null};
        case actionTypes.SHOW_SHOPPING_FORM:
            return {...state, shoppingFormVisible: true};
        case actionTypes.CHANGE_MODE_USER_DUE_TIMEOUT:
        case actionTypes.CHANGE_MODE_USER:
        case actionTypes.CHANGE_PAGE_ADMIN_MAIN_MENU:
        case actionTypes.CHANGE_PAGE_USER_MAIN_MENU:
            return initialState;
        default:
            return state;
    }
}

export default itemSelectionForm;