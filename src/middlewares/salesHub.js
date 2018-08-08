import actionTypes from '../constants/actionTypes';
import { addSales } from '../actions';

export const salesHub = store => next => action => {
    var currentTime = new Date().toLocaleString("en-ZA");
    switch (action.type) {
        case actionTypes.SERVER_SAVE_CHANGE_AS_CUSTOMER_CREDIT:
        case actionTypes.SERVER_ADD_SALES:
            var customerCredit = action.type === actionTypes.SERVER_ADD_SALES ? 0 : action.customerCredit;
            var newSales = {
                id: currentTime.replace(new RegExp("/",'g'),"").replace(new RegExp(":",'g'),"")
                            .replace(new RegExp(",",'g'),"").replace(new RegExp(" ",'g'),""),
                date: currentTime.substring(0, 10),
                customerId: store.getState().activeCustomer.id,
                details: store.getState().stockShopRecords.map((record) => ({
                    barcode: record.barcode,
                    qty: record.qty
                }))
            };
            //TODO: hub call to add sales
            //TODO: should return next(action);
            return next(addSales(newSales, customerCredit));
    }

    return next(action);
}

export const salesHubConnector = (store, callBack) => {

}