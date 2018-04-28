import actionTypes from './../../constants/actionTypes';

const sales = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_SALES:
            return [...state, action.sales];
        default:
            return state;
    }
}

export default sales;