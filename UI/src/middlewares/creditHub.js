import actionTypes from '../constants/actionTypes';
import { updateItemsAndCustomer } from '../actions';

const addCreditRequest = (next, newCredit) => {
    let request = new Request("http://localhost:3000/api/credits/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newCredit)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(updateItemsAndCustomer(data.items, {
                    id: newCredit.customerId,
                    credit: 0.00
                }));
            });
        }
    });
};

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
            addCreditRequest(next, newCredit);
            break;
    }

    return next(action);
}