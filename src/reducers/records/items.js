import actionTypes from './../../constants/actionTypes';

const items = (state = [], action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return [...state, {
                barcode: action.item.barcode,
                name: action.item.name,
                supplierId: action.item.supplierId,
                brandId: action.item.brandId,
                price: action.item.price,
                costPrice: 0.00,
                vegan: action.item.vegan,
                qty: action.item.qty
            }];
        case actionTypes.SAVE_ITEM:
            return state.map((item) => (
                item.barcode === action.item.barcode ? {
                    ...item,
                    name: action.item.name,
                    supplierId: action.item.supplierId,
                    brandId: action.item.brandId,
                    price: action.item.price,
                    vegan: action.item.vegan,
                    qty: action.item.qty
                } : item
            ));
        case actionTypes.ADD_STOCK:
            action.stock.details.forEach((detail) => {
                state = state.map((item) => (
                    item.barcode === detail.barcode ? {
                        ...item,
                        price: detail.sellPrice,
                        costPrice: detail.costPrice,
                        qty: item.qty + detail.qty
                    }                    
                    : item
                ));
            });
            return state;
        case actionTypes.ADD_SALES:
            action.sales.details.forEach((detail) => {
                state = state.map((item) => (
                    item.barcode === detail.barcode ? {
                        ...item,
                        qty: item.qty - detail.qty
                    }                    
                    : item
                ));
            });
            return state;
        case actionTypes.ADD_CREDIT:
            action.credit.details.forEach((detail) => {
                state = state.map((item) => (
                    item.barcode === detail.barcode ? {
                        ...item,
                        qty: item.qty - detail.qty
                    }                    
                    : item
                ));
            });
        case actionTypes.DELETE_ITEM:
            return state.filter((item) => {
                return item.barcode !== action.barcode;
            });
        default:
            return state;
    }
}

export default items;