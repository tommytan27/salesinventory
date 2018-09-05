import actionTypes from './../../constants/actionTypes';

const customers = (state = [], action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.UPDATE_CUSTOMERS:
            return action.customers;
        case actionTypes.ADD_CUSTOMER:
            return [...state, {
                id: action.customer.id,
                firstName: action.customer.firstName,
                lastName: action.customer.lastName,
                contact: action.customer.contact,
                credit: 0.00
            }];
        case actionTypes.SAVE_CUSTOMER:
            return state.map((customer) => (
                customer.id === action.customer.id ? {
                    ...customer,
                    firstName: action.customer.firstName,
                    lastName: action.customer.lastName,
                    contact: action.customer.contact
                } : customer
            ));
        case actionTypes.DELETE_CUSTOMER:
            return state.filter((customer) => {
                return customer.id !== action.customerId;
            });
        case actionTypes.ADD_SALES:
            return state.map((customer) => (
                customer.id === action.sales.customerId ? {
                    ...customer,
                    credit: action.customerCredit
                } :
                customer
            ));
        default:
            return state;
    }
}

export default customers;