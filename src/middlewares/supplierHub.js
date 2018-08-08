import actionTypes from '../constants/actionTypes';
import { addSupplier, failAddSupplier, saveSupplier, failSaveSupplier, deleteSupplier } from '../actions';

const isSupplierValid = (supplier) => {
    return (supplier.name.state === "success") ? true : false;
}

const mapSupplierInDialogToSupplier = (supplierInDialog) => {
    return {
        id: supplierInDialog.id,
        name: supplierInDialog.name.value,
        contact: supplierInDialog.contact.value
    }
}

export const supplierHub = store => next => action => {
    var currentSupplier = store.getState().supplierDialogs.supplierInDialog;
    switch (action.type) {
        case actionTypes.SERVER_ADD_SUPPLIER:
            if (isSupplierValid(currentSupplier)) {
                var supplierToBeAdded = mapSupplierInDialogToSupplier(currentSupplier);
                //TODO: hub call to add user
                return next(addSupplier(supplierToBeAdded));
            }
            return next(failAddSupplier());
        case actionTypes.SERVER_SAVE_SUPPLIER:
            if (isSupplierValid(currentSupplier)) {
                var supplierToBeSaved = mapSupplierInDialogToSupplier(currentSupplier);
                //TODO: hub call to save user
                return next(saveSupplier(supplierToBeSaved));
            }
            return next(failSaveSupplier());
        case actionTypes.SERVER_DELETE_SUPPLIER:
            //TODO: hub call to delete supplier
            return next(deleteSupplier(currentSupplier.id));
    }

    return next(action);
}

export const supplierHubConnector = (store, callBack) => {

}