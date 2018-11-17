import actionTypes from './../../constants/actionTypes';

const customers = (state = [], action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.UPDATE_ITEMS_AND_CUSTOMER:
        return state.map((customer) => (
            customer.id === action.customer.id ? {
                ...customer,
                credit: action.customer.credit
            } : customer
        ));
        case actionTypes.UPDATE_CUSTOMERS:
            return action.customers.map((customer) => ({
                ...customer,
                id: parseInt(customer.id),
                credit: parseFloat(customer.credit)
            }));
        case actionTypes.ADD_CUSTOMER:
            return [...state, {
                id: parseInt(action.customer.id),
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