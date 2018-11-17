import actionTypes from '../constants/actionTypes';
import { failSaveItem, failAddItem, addItem, saveItem, deleteItem, updateItems } from '../actions';

const isItemValid = (item) => {
    return (item.barcode.state === "success" &&
    item.name.state === "success" &&
    item.price.state === "success") ? true : false;
}

const mapItemInDialogToItem = (itemInDialog) => {
    return {
        barcode: itemInDialog.barcode.value,
        name: itemInDialog.name.value,
        supplierId: itemInDialog.supplierId,
        brandId: itemInDialog.brandId,
        price: parseFloat(itemInDialog.price.value),
        vegan: itemInDialog.vegan,
        qty: itemInDialog.qty.value ? itemInDialog.qty.value : 0
    }
}

const getItems = (next) => {
    let request = new Request("http://localhost:3000/api/items/get", {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(updateItems(data.items));
            });
        }
    });
};

const addItemRequest = (next, newItem) => {
    let request = new Request("http://localhost:3000/api/items/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newItem)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(addItem(newItem));
            });
        }
    });
};

const deleteItemRequest = (next, deletedItem) => {
    let request = new Request("http://localhost:3000/api/items/delete", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({id: deletedItem.barcode.value})
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(deleteItem(deletedItem.barcode));
        }
    });
};

const editItemRequest = (next, editedItem) => {
    let request = new Request("http://localhost:3000/api/items/edit", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(editedItem)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(saveItem(editedItem));
        }
    });
};

export const itemHub = store => next => action => {
    var currentItem = store.getState().itemDialogs.itemInDialog;
    switch (action.type) {
        case actionTypes.SERVER_GET_ITEMS:
            getItems(next);
            break;
        case actionTypes.SERVER_ADD_ITEM:
            if (isItemValid(currentItem)) {
                var itemToBeAdded = mapItemInDialogToItem(currentItem);
                addItemRequest(next, itemToBeAdded);
                break;
            }
            return next(failAddItem());
        case actionTypes.SERVER_SAVE_ITEM:
            if (isItemValid(currentItem)) {
                var itemToBeSaved = mapItemInDialogToItem(currentItem);
                editItemRequest(next, itemToBeSaved);
                break;
            }
            return next(failSaveItem());
        case actionTypes.SERVER_DELETE_ITEM:
            deleteItemRequest(next, currentItem);
            break;
    }

    return next(action);
}