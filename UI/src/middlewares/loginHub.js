import actionTypes from '../constants/actionTypes';
import { failLoginUser, changeModeAdmin } from '../actions';

const verifyUser = (next, username, password) => {
    let requestData = {
        username: username,
        password: password
    };
    let request = new Request("http://localhost:3000/api/login", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(requestData)
    });

    fetch(request).then((response) => {
        if(response.status === 200) {
            response.json().then((data) => {
                return next(changeModeAdmin(data.username, parseInt(data.timeout)));
            });
        }
        else{
            return next(failLoginUser());
        }
    });
};

export const loginHub = store => next => action => {
    switch (action.type) {
        case actionTypes.SERVER_LOGIN_USER:
            verifyUser(next, action.username, action.password);
    }

    return next(action);
}