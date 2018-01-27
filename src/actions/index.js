import actionTypes from './../constants/actionTypes';

export const openAddUserDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_USER_DIALOG
    };
}

export const openEditUserDialog = (user) => {
    return {
        type: actionTypes.OPEN_EDIT_USER_DIALOG,
        user: user
    };
}

export const closeUserDialog = () => {
    return {
        type: actionTypes.CLOSE_USER_DIALOG
    };
}

export const enableEditable = () => {
    return {
        type: actionTypes.ENABLE_EDITABLE
    };
}

export const updateUsernameField = (username, allUsers) => {
    return {
        type: actionTypes.UPDATE_USERNAME_FIELD,
        username: username,
        allUsers: allUsers
    };
}

export const updateTimeoutField = (timeout) => {
    return {
        type: actionTypes.UPDATE_TIMEOUT_FIELD,
        timeout: timeout
    };
}

export const updatePasswordField = (password) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_FIELD,
        password: password
    }
}

export const updateConfirmPasswordField = (confirmPassword) => {
    return {
        type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
        confirmPassword: confirmPassword
    }
}