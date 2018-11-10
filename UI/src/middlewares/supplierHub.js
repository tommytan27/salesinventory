import actionTypes from '../constants/actionTypes';
import { addSupplier, failAddSupplier, saveSupplier, failSaveSupplier, deleteSupplier, updateSuppliers } from '../actions';

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

const getSuppliers = (next) => {
    let request = new Request("http://localhost:3000/api/suppliers/get", {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(updateSuppliers(data.suppliers));
            });
        }
    });
};

const addSupplierRequest = (next, newSupplier) => {
    let request = new Request("http://localhost:3000/api/suppliers/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newSupplier)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(addSupplier({
                    id: data.supplierId,
                    name: newSupplier.name,
                    contact: newSupplier.contact
                }));
            });
        }
    });
};

const deleteSupplierRequest = (next, deletedSupplier) => {
    let request = new Request("http://localhost:3000/api/suppliers/delete", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({id: deletedSupplier.id})
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(deleteSupplier(deletedSupplier.id));
        }
    });
};

const editSupplierRequest = (next, editedSupplier) => {
    let request = new Request("http://localhost:3000/api/suppliers/edit", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
            id: editedSupplier.id,
            name: editedSupplier.name,
            contact: editedSupplier.contact
        })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(saveSupplier(editedSupplier));
        }
    });
};

export const supplierHub = store => next => action => {
    var currentSupplier = store.getState().supplierDialogs.supplierInDialog;
    switch (action.type) {
        case actionTypes.SERVER_GET_SUPPLIERS:
            getSuppliers(next);
            break;
        case actionTypes.SERVER_ADD_SUPPLIER:
            if (isSupplierValid(currentSupplier)) {
                var supplierToBeAdded = mapSupplierInDialogToSupplier(currentSupplier);
                addSupplierRequest(next, supplierToBeAdded);
                break;
            }
            return next(failAddSupplier());
        case actionTypes.SERVER_SAVE_SUPPLIER:
            if (isSupplierValid(currentSupplier)) {
                var supplierToBeSaved = mapSupplierInDialogToSupplier(currentSupplier);
                editSupplierRequest(next, supplierToBeSaved);
                break;
            }
            return next(failSaveSupplier());
        case actionTypes.SERVER_DELETE_SUPPLIER:
            deleteSupplierRequest(next, currentSupplier);
            break;
    }

    return next(action);
}

export const supplierHubConnector = (store, callBack) => {

}