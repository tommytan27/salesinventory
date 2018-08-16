import actionTypes from '../constants/actionTypes';
import { updateRecords } from '../actions';

export const searchHub = store => next => action => {
    switch (action.type) {
        case actionTypes.SERVER_SEARCH_RECORDS:
            //TODO: SERVER SIDE SEARCH            
            return next(updateRecords({
                sales: [{
                    id: "20180224144820", date: "2018/02/24", customerId: 1, details: [
                        {barcode: "1153135151", qty: 1},
                        {barcode: "1531831812", qty: 1}
                ]}],
                credits: [{
                    id: "20180224144820", date: "2018/02/24", customerId: 1, details: [
                        {barcode: "1153135151", qty: 1},
                        {barcode: "1531831812", qty: 1}
                ]}],
                stocks: [{
                    id: "20180224144820", date: "2018/02/24", details: [
                        {barcode: "1153135151", qty: 1, sellPrice: 9.50, costPrice: 8.75},
                        {barcode: "1531831812", qty: 1, sellPrice: 8.50, costPrice: 7.50}
                ]}]
            }));
    }

    return next(action);
}

export const loginHubConnector = (store, callBack) => {

}