import actionTypes from '../constants/actionTypes';
import { updateItemsAndCustomer } from '../actions';

const addSalesRequest = (next, newSales) => {
    let request = new Request("http://localhost:3000/api/sales/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newSales)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(updateItemsAndCustomer(data.items, {
                    id: newSales.customerId,
                    credit: newSales.customerCredit
                }));
            });
        }
    });
};

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
                })),
                customerCredit: customerCredit
            };
            addSalesRequest(next, newSales);
            break;
    }

    return next(action);
}