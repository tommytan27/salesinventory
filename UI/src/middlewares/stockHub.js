import actionTypes from '../constants/actionTypes';

const addStockRequest = (next, newStock) => {
    let request = new Request("http://localhost:3000/api/stocks/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newStock)
    });
};

export const stockHub = store => next => action => {
    var currentTime = new Date().toLocaleString("en-ZA");
    switch (action.type) {
        case actionTypes.SERVER_ADD_STOCK:
            var newStock = {
                id: currentTime.replace(new RegExp("/",'g'),"").replace(new RegExp(":",'g'),"")
                            .replace(new RegExp(",",'g'),"").replace(new RegExp(" ",'g'),""),
                date: currentTime.substring(0, 10),
                details: store.getState().stockShopRecords.map((record) => ({
                    barcode: record.barcode,
                    qty: record.qty,
                    sellPrice: record.sellPrice,
                    costPrice: record.costPrice
                }))
            };
            addStockRequest(next, newStock);
            break;
    }

    return next(action);
}