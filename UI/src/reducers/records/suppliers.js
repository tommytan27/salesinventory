import actionTypes from "../../constants/actionTypes";

const suppliers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SUPPLIERS:
            return action.suppliers.map((supplier) => ({
                ...supplier,
                id: parseInt(supplier.id)
            }));
        case actionTypes.ADD_SUPPLIER:
            return [...state, {
                id: parseInt(action.supplier.id),
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