import actionTypes from './../../constants/actionTypes';

const testCustomers = [
    {id: 0, firstName: "Anonymous", lastName: "Anonymous", contact: "", credit: 0.00}
];

const customers = (state = testCustomers, action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.ADD_CUSTOMER:
            return [...state, {
                id: currentLength,
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