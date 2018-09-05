import actionTypes from '../constants/actionTypes';
import { addCustomer, saveCustomer, failSaveCustomer, failAddCustomer, deleteCustomer, updateCustomers } from '../actions';

const isCustomerValid = (customer) => {
    return (customer.firstName.state === "success" &&
        customer.lastName.state === "success") ? true : false;
}

const mapCustomerInDialogToCustomer = (customerInDialog) => {
    return {
        id: customerInDialog.id,
        firstName: customerInDialog.firstName.value,
        lastName: customerInDialog.lastName.value,
        contact: customerInDialog.contact.value,
        credit: customerInDialog.credit
    }
}

const getCustomers = (next) => {
    let request = new Request("http://localhost:3000/api/customers/get", {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(updateCustomers(data.customers));
            });
        }
    });
};

const addCustomerRequest = (next, newCustomer) => {
    let request = new Request("http://localhost:3000/api/customers/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newCustomer)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(addCustomer({
                    id: data.customerId,
                    firstName: newCustomer.firstName,
                    lastName: newCustomer.lastName,
                    contact: newCustomer.contact,
                    credit: newCustomer.credit
                }));
            });
        }
    });
};

const deleteCustomerRequest = (next, deletedCustomer) => {
    let request = new Request("http://localhost:3000/api/customers/delete", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({id: deletedCustomer.id})
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(deleteCustomer(deletedCustomer.id));
        }
    });
};

const editCustomerRequest = (next, editedCustomer) => {
    let request = new Request("http://localhost:3000/api/customers/edit", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
            id: editedCustomer.id,
            firstName: editedCustomer.firstName,
            lastName: editedCustomer.lastName
        })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(saveCustomer(editedCustomer));
        }
    });
};

export const customerHub = store => next => action => {
    var currentCustomer = store.getState().customerDialogs.customerInDialog;
    switch (action.type) {
        case actionTypes.SERVER_GET_CUSTOMERS:
            getCustomers(next);
            break;
        case actionTypes.SERVER_ADD_CUSTOMER:
            if (isCustomerValid(currentCustomer)) {
                var customerToBeAdded = mapCustomerInDialogToCustomer(currentCustomer);
                addCustomerRequest(next, customerToBeAdded);
                break;
            }
            return next(failAddCustomer());
        case actionTypes.SERVER_SAVE_CUSTOMER:
            if (isCustomerValid(currentCustomer)) {
                var customerToBeSaved = mapCustomerInDialogToCustomer(currentCustomer);
                editCustomerRequest(next, customerToBeSaved);
                break;
            }
            return next(failSaveCustomer());
        case actionTypes.SERVER_DELETE_CUSTOMER:
            deleteCustomerRequest(next, currentCustomer);
            break;
    }

    return next(action);
}

export const customerHubConnector = (store, callBack) => {

}