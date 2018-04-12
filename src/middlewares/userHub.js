import actionTypes from '../constants/actionTypes';
import { addUser, saveUser, failSaveUser, failAddUser } from '../actions';

const isNewUserValid = (user) => {
    return (user.username.state === "success" &&
    (user.password.state === "success" ||
    user.password.state === "warning") &&
    user.confirmPassword.state === "success" &&
    user.timeout.state === "success") ? true : false;
}

const isEditedUserValid = (user) => {
    return (user.timeout.state === "success") ? true : false;
}

const mapUserInDialogToUser = (userInDialog) => {
    return {
        id: userInDialog.id,
        username: userInDialog.username.value,
        password: userInDialog.password.value,
        timeout: userInDialog.timeout.value
    }
}

export const userHub = store => next => action => {
    var currentUser = store.getState().userDialogs.userInDialog;
    switch (action.type) {
        case actionTypes.SIGNAL_R_ADD_USER:
            if (isNewUserValid(currentUser)) {
                var userToBeAdded = mapUserInDialogToUser(currentUser);
                //TODO: hub call to add user
                return next(addUser(userToBeAdded));
            }
            return next(failAddUser());
        case actionTypes.SIGNAL_R_SAVE_USER:
            if (isEditedUserValid(currentUser)) {
                var userToBeSaved = mapUserInDialogToUser(currentUser);
                //TODO: hub call to save user
                return next(saveUser(userToBeSaved));
            }
            return next(failSaveUser());
    }

    return next(action);
}

export const userHubConnector = (store, callBack) => {

}