import actionTypes from '../constants/actionTypes';
import { addUser, saveUser, failSaveUser, failAddUser, deleteUser, updateUsers } from '../actions';

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

const getUsers = (next) => {
    let request = new Request("http://localhost:3000/api/users/get", {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(updateUsers(data.users));
            });
        }
    });
};

const addUserRequest = (next, newUser) => {
    let request = new Request("http://localhost:3000/api/users/add", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newUser)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(addUser({
                    id: data.userId,
                    username: newUser.username,
                    timeout: newUser.timeout
                }));
            });
        }
    });
};

const deleteUserRequest = (next, deletedUser) => {
    let request = new Request("http://localhost:3000/api/users/delete", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({id: deletedUser.id})
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(deleteUser(deletedUser.id));
        }
    });
};

const editUserRequest = (next, editedUser) => {
    let request = new Request("http://localhost:3000/api/users/edit", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
            id: editedUser.id,
            timeout: editedUser.timeout
        })
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            return next(saveUser(editedUser));
        }
    });
};

export const userHub = store => next => action => {
    var currentUser = store.getState().userDialogs.userInDialog;
    switch (action.type) {
        case actionTypes.SERVER_GET_USERS:
            getUsers(next);
            break;
        case actionTypes.SERVER_ADD_USER:
            if (isNewUserValid(currentUser)) {
                var userToBeAdded = mapUserInDialogToUser(currentUser);
                addUserRequest(next, userToBeAdded);
                break;
            }
            return next(failAddUser());
        case actionTypes.SERVER_SAVE_USER:
            if (isEditedUserValid(currentUser)) {
                var userToBeSaved = mapUserInDialogToUser(currentUser);
                editUserRequest(next, userToBeSaved);
                break;
            }
            return next(failSaveUser());
        case actionTypes.SERVER_DELETE_USER:
            deleteUserRequest(next, currentUser);
            break;
    }

    return next(action);
}