import actionTypes from './../../constants/actionTypes';
    
const stocks = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_STOCK:
            return [...state, action.stock];
        default:
            return state;
    }
}

export default stocks;