import actionTypes from '../constants/actionTypes';
import { failLoginUser, changeModeAdmin } from '../actions';

export const loginHub = store => next => action => {
    switch (action.type) {
        case actionTypes.SIGNAL_R_LOGIN_USER:
            //TODO: CHANGE THE METHOD WITH SERVER SIDE AUTHENTICATION
            let users = store.getState().users;
            let foundUser = users.find((user) => {
                return user.username === action.username;
            });

            if (foundUser) {
                return next(changeModeAdmin(foundUser.username, foundUser.timeout));
            }
            else {
                return next(failLoginUser());
            }
    }

    return next(action);
}

export const loginHubConnector = (store, callBack) => {

}