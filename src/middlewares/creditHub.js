import actionTypes from '../constants/actionTypes';
import { addCredit } from '../actions';

export const creditHub = store => next => action => {
    var currentTime = new Date().toLocaleString("en-ZA");
    switch (action.type) {
        case actionTypes.SERVER_ADD_CREDIT:
            var newCredit = {
                id: currentTime.replace(new RegExp("/",'g'),"").replace(new RegExp(":",'g'),"")
                            .replace(new RegExp(",",'g'),"").replace(new RegExp(" ",'g'),""),
                date: currentTime.substring(0, 10),
                customerId: store.getState().activeCustomer.id,
                details: store.getState().stockShopRecords.map((record) => ({
                    barcode: record.barcode,
                    qty: record.qty
                }))
            };
            //TODO: hub call to add credit
            //TODO: should return next(action);
            return next(addCredit(newCredit));
    }

    return next(action);
}

export const creditHubConnector = (store, callBack) => {

}