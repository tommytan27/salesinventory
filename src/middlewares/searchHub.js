import actionTypes from '../constants/actionTypes';
import { updateRecords } from '../actions';

export const searchHub = store => next => action => {
    switch (action.type) {
        case actionTypes.SERVER_SEARCH_RECORDS:
            //TODO: SERVER SIDE SEARCH            
            return next(updateRecords({
                sales: [],
                credits: [],
                stocks: []
            }));
    }

    return next(action);
}

export const loginHubConnector = (store, callBack) => {

}