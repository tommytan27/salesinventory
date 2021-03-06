import actionTypes from "../../constants/actionTypes";

const suppliers = (state = [], action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.ADD_SUPPLIER:
            return [...state, {
                id: currentLength + 1,
                name: action.supplier.name,
                contact: action.supplier.contact
            }];
        case actionTypes.SAVE_SUPPLIER:
            return state.map((supplier) => (
                supplier.id === action.supplier.id ? {
                    ...supplier,
                    name: action.supplier.name,
                    contact: action.supplier.contact
                } : supplier
            ));
        case actionTypes.DELETE_SUPPLIER:
            return state.filter((supplier) => {
                return supplier.id !== action.supplierId;
            });
        default:
            return state;
    }
}

export default suppliers;