import actionTypes from './../../constants/actionTypes';

const items = (state = [], action) => {
    switch (action.type) {
        case actionTypes.UPDATE_ITEMS_AND_CUSTOMER:
        case actionTypes.UPDATE_ITEMS:
            return action.items.map((item) => ({
                ...item,
                supplierId: parseInt(item.supplierId),
                brandId: parseInt(item.brandId),
                price: parseFloat(item.price),
                costPrice: parseFloat(item.costPrice),
                qty: parseInt(item.qty)
            }));
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
        case actionTypes.DELETE_ITEM:
            return state.filter((item) => {
                return item.barcode !== action.barcode;
            });
        default:
            return state;
    }
}

export default items;