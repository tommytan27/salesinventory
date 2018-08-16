import actionTypes from '../constants/actionTypes';
import { addCustomer, saveCustomer, failSaveCustomer, failAddCustomer, deleteCustomer } from '../actions';

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

export const customerHub = store => next => action => {
    var currentCustomer = store.getState().customerDialogs.customerInDialog;
    switch (action.type) {
        case actionTypes.SERVER_ADD_CUSTOMER:
            if (isCustomerValid(currentCustomer)) {
                var customerToBeAdded = mapCustomerInDialogToCustomer(currentCustomer);
                //TODO: hub call to add customer
                return next(addCustomer(customerToBeAdded));
            }
            return next(failAddCustomer());
        case actionTypes.SERVER_SAVE_CUSTOMER:
            if (isCustomerValid(currentCustomer)) {
                var customerToBeSaved = mapCustomerInDialogToCustomer(currentCustomer);
                //TODO: hub call to save customer
                return next(saveCustomer(customerToBeSaved));
            }
            return next(failSaveCustomer());
        case actionTypes.SERVER_DELETE_CUSTOMER:
            //TODO: hub call to delete customer
            return next(deleteCustomer(currentCustomer.id));
    }

    return next(action);
}

export const customerHubConnector = (store, callBack) => {

}