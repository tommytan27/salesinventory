import actionTypes from './../constants/actionTypes';

export const openAddUserDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_USER_DIALOG
    };
}

export const closeAddUserDialog = () => {
    return {
        type: actionTypes.CLOSE_ADD_USER_DIALOG
    };
}

export const openEditUserDialog = (user) => {
    return {
        type: actionTypes.OPEN_EDIT_USER_DIALOG,
        user: user
    };
}

export const closeEditUserDialog = () => {
    return {
        type: actionTypes.CLOSE_EDIT_USER_DIALOG
    };
}

export const enableEditMode = () => {
    return {
        type: actionTypes.ENABLE_EDIT_MODE
    };
}

export const updateUsernameField = (username) => {
    return {
        type: actionTypes.UPDATE_USERNAME_FIELD,
        username: username
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