import actionTypes from './../../constants/actionTypes';

const brands = (state = [], action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.UPDATE_BRANDS:
            return action.brands.map((brand) => ({
                ...brand,
                id: parseInt(brand.id)
            }));
        case actionTypes.ADD_BRAND:
            return [...state, {
                id: parseInt(action.brand.id),
                name: action.brand.name
            }];
        case actionTypes.SAVE_BRAND:
            return state.map((brand) => (
                brand.id === action.brand.id ? {
                    ...brand,
                    name: action.brand.name
                } : brand
            ));
        case actionTypes.DELETE_BRAND:
            return state.filter((brand) => {
                return brand.id !== action.brandId;
            });
        default:
            return state;
    }
}

export default brands;