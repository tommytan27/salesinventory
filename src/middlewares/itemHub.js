import actionTypes from '../constants/actionTypes';
import { failSaveItem, failAddItem, addItem, saveItem } from '../actions';

const getDialogErrorState = (currentState) => {
}

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

export const itemHub = store => next => action => {
    var currentItem = store.getState().itemDialogs.itemInDialog;
    switch (action.type) {
        case actionTypes.SIGNAL_R_ADD_ITEM:
            if (isItemValid(currentItem)) {
                var itemToBeAdded = mapItemInDialogToItem(currentItem);
                //TODO: hub call to add item
                return next(addItem(itemToBeAdded));
            }
            return next(failAddItem());
        case actionTypes.SIGNAL_R_SAVE_ITEM:
            if (isItemValid(currentItem)) {
                var itemToBeSaved = mapItemInDialogToItem(currentItem);
                //TODO: hub call to save item
                return next(saveItem(itemToBeSaved));
            }
            return next(failSaveItem());
    }

    return next(action);
}

export const itemHubConnector = (store, callBack) => {

}