import actionTypes from '../constants/actionTypes';
import { addBrand, saveBrand, failAddBrand, failSaveBrand, deleteBrand, updateBrands } from '../actions';

const isBrandValid = (brand) => {
    return (brand.name.state === "success") ? true : false;
}

const mapBrandInDialogToBrand = (brandInDialog) => {
    return {
        id: brandInDialog.id,
        name: brandInDialog.name.value
    }
}

const getBrands = (next) => {
    let request = new Request("http://localhost:3000/api/brands/get", {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(updateBrands(data.brands));
            });
        }
    });
};

const addBrandRequest = (next, newBrand) => {
    let request = new Request("http://localhost:3000/api/brands/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newBrand)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(addBrand({
                    id: data.brandId,
                    name: newBrand.name
                }));
            });
        }
    });
};

const deleteBrandRequest = (next, deletedBrand) => {
    let request = new Request("http://localhost:3000/api/brands/delete", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({id: deletedBrand.id})
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(deleteBrand(deletedBrand.id));
        }
    });
};

const editBrandRequest = (next, editedBrand) => {
    let request = new Request("http://localhost:3000/api/brands/edit", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
            id: editedBrand.id,
            name: editedBrand.name
        })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(saveBrand(editedBrand));
        }
    });
};

export const brandHub = store => next => action => {
    var currentBrand = store.getState().brandDialogs.brandInDialog;
    switch (action.type) {
        case actionTypes.SERVER_GET_BRANDS:
            getBrands(next);
            break;
        case actionTypes.SERVER_ADD_BRAND:
            if (isBrandValid(currentBrand)) {
                var brandToBeAdded = mapBrandInDialogToBrand(currentBrand);
                addBrandRequest(next, brandToBeAdded);
                break;
            }
            return next(failAddBrand());
        case actionTypes.SERVER_SAVE_BRAND:
            if (isBrandValid(currentBrand)) {
                var brandToBeSaved = mapBrandInDialogToBrand(currentBrand);
                editBrandRequest(next, brandToBeSaved);
                break;
            }
            return next(failSaveBrand());
        case actionTypes.SERVER_DELETE_BRAND:
            deleteBrandRequest(next, currentBrand);
            break;
    }

    return next(action);
}