import actionTypes from './../constants/actionTypes';

export const openAddUserDialog = () => {
    return {
        type: actionTypes.OPEN_ADD_USER_DIALOG
    }
}

export const openEditUserDialog = (userID) => {
    return {
        type: actionTypes.OPEN_EDIT_USER_DIALOG,
        userID: userID
    }
}

export const closeEditUserDialog = () => {
    return {
        type: actionTypes.CLOSE_EDIT_USER_DIALOG
    }
}