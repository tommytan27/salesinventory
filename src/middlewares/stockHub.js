import actionTypes from '../constants/actionTypes';

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
            //TODO: hub call to add stock
            //TODO: should return next(action);
            //return next(addStock(newStock));
    }

    return next(action);
}

export const stockHubConnector = (store, callBack) => {

}