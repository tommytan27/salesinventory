import actionTypes from '../constants/actionTypes';
import { addBrand, saveBrand, failAddBrand, failSaveBrand } from '../actions';


const isBrandValid = (brand) => {
    return (brand.name.state === "success") ? true : false;
}

const mapBrandInDialogToBrand = (brandInDialog) => {
    return {
        id: brandInDialog.id,
        name: brandInDialog.name.value
    }
}

export const brandHub = store => next => action => {
    var currentBrand = store.getState().brandDialogs.brandInDialog;
    switch (action.type) {
        case actionTypes.SIGNAL_R_ADD_BRAND:
            if (isBrandValid(currentBrand)) {
                var brandToBeAdded = mapBrandInDialogToBrand(currentBrand);
                //TODO: hub call to add brand
                return next(addBrand(brandToBeAdded));
            }
            return next(failAddBrand());
        case actionTypes.SIGNAL_R_SAVE_BRAND:
            if (isBrandValid(currentBrand)) {
                var brandToBeSaved = mapBrandInDialogToBrand(currentBrand);
                //TODO: hub call to save brand
                return next(saveBrand(brandToBeSaved));
            }
            return next(failSaveBrand());
    }

    return next(action);
}

export const brandHubConnector = (store, callBack) => {

}