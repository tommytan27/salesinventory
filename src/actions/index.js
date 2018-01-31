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
    };
}

export const updateConfirmPasswordField = (confirmPassword) => {
    return {
        type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
        confirmPassword: confirmPassword
    };
}

export const addUser = () => {
    return {
        type: actionTypes.ADD_USER
    };
}

export const saveUser = () => {
    return {
        type: actionTypes.SAVE_USER
    };
}

export const openAddCustomerDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_CUSTOMER_DIALOG
    };
}

export const openEditCustomerDialog = (customer) => {
    return {
        type: actionTypes.OPEN_EDIT_CUSTOMER_DIALOG,
        customer: customer
    };
}

export const closeCustomerDialog = () => {
    return {
        type: actionTypes.CLOSE_CUSTOMER_DIALOG
    };
}

export const updateFirstNameField = (firstName) => {
    return {
        type: actionTypes.UPDATE_FIRSTNAME_FIELD,
        firstName: firstName
    };
}

export const updateLastNameField = (lastName) => {
    return {
        type: actionTypes.UPDATE_LASTNAME_FIELD,
        lastName: lastName
    };
}

export const updateContactField = (contact) => {
    return {
        type: actionTypes.UPDATE_CONTACT_FIELD,
        contact: contact
    };
}

export const addCustomer = () => {
    return {
        type: actionTypes.ADD_CUSTOMER
    };
}

export const saveCustomer = () => {
    return {
        type: actionTypes.SAVE_CUSTOMER
    };
}