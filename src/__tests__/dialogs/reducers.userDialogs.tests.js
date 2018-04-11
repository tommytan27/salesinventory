import userDialogs from './../../reducers/dialogs/userDialogs';
import actionTypes from './../../constants/actionTypes';
import dialogModes from './../../constants/dialogModes';
import dialogTitles from './../../constants/dialogTitles';

const assertInitialDialogState = (state, action) => {
    expect(userDialogs(state, action).dialogState.open).toBeFalsy();
    expect(userDialogs(state, action).dialogState.title).toEqual("");
    expect(userDialogs(state, action).dialogState.mode).toBeNull();
    expect(userDialogs(state, action).dialogState.error).toBeFalsy();
    expect(userDialogs(state, action).dialogState.editable).toEqual(false);
}

const assertInitialState = (state, action) => {    
    expect(userDialogs(state, action).userInDialog
    .id).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .username.value).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .timeout.value).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .password.value).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .confirmPassword.value).toBeNull();

    expect(userDialogs(state, action).userInDialog
    .username.state).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .timeout.state).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .password.state).toBeNull();
    expect(userDialogs(state, action).userInDialog
    .confirmPassword.state).toBeNull();
}

const assertOpenAddUserDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.ADD_USER);
    expect(state.dialogState.mode).toEqual(dialogModes.ADD_MODE);
    expect(state.dialogState.editable).toBeTruthy();
}

const assertOpenEditUserDialog = (state) => {
    expect(state.dialogState.open).toBeTruthy();
    expect(state.dialogState.title).toEqual(dialogTitles.EDIT_USER);
    expect(state.dialogState.mode).toEqual(dialogModes.EDIT_MODE);
    expect(state.dialogState.editable).toEqual(false);
}

const dummyUsername = "dummy";
const dummyTimeout = 50;
const dummyPassword = "Password123!!!";

const dummyUser = {
    id: 0,
    username: dummyUsername,
    timeout: dummyPassword
};

const dummyUsers = [
    {id: 1, username: "admin", timeout: 10},
    {id: 2, username: "ttanzil", timeout: 10},
    {id: 3, username: "hwinarto", timeout: 10}
];

describe('UserDialogs', () => {
    it('should return initial state of all dialogs closed', () => {
        assertInitialDialogState(undefined, {});
    });
    it('should return user dialog opened when receiving OPEN_ADD_USER_DIALOG action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        });
        assertOpenAddUserDialog(returnValue);
    });
    it('should return user dialog opened but not in edit mode when receiving OPEN_EDIT_USER_DIALOG action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        assertOpenEditUserDialog(returnValue);
    });
    it('should return user dialog opened after closed when receiving OPEN_ADD_USER_DIALOG action', () => {
        const returnValue = userDialogs({
            dialogState: {
                open: false
            }
        }, {
            type: actionTypes.OPEN_ADD_USER_DIALOG
        });
        assertOpenAddUserDialog(returnValue);
    });
    it('should return user dialog opened after closed when receiving OPEN_EDIT_USER_DIALOG action', () => {
        const returnValue = userDialogs({
            dialogModes: {
                open: false,
                editable: false
            }
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        assertOpenEditUserDialog(returnValue);
    });
    it('should return selected user record when receiving OPEN_EDIT_USER_DIALOG action', () => {        
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        assertOpenEditUserDialog(returnValue);
        expect(returnValue.userInDialog
            .id).toEqual(dummyUser.id);
        expect(returnValue.userInDialog
            .username.value).toEqual(dummyUser.username);
        expect(returnValue.userInDialog
            .timeout.value).toEqual(dummyUser.timeout);
    });
    it('should return all fields state success when receiving OPEN_EDIT_USER_DIALOG action', () => {        
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                editable: false
            },
        }, {
            type: actionTypes.OPEN_EDIT_USER_DIALOG,
            user: dummyUser
        });
        expect(returnValue.userInDialog.username.state).toBe("success");
        expect(returnValue.userInDialog.timeout.state).toBe("success");
    });
    it('should return user dialog closed and initial state of all fields when receiving CLOSE_USER_DIALOG action', () => {
        let state = undefined;
        let action = {
            type: actionTypes.CLOSE_USER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return user dialog closed and initial state of all fields after opened when receiving CLOSE_USER_DIALOG action', () => {
        let state = {
            dialogState: {
                open: true
            }
        };
        let action = {
            type: actionTypes.CLOSE_USER_DIALOG
        }
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return edit mode true when receiving ENABLE_EDIT_MODE', () => {
        expect(userDialogs(undefined, {
            type: actionTypes.ENABLE_EDITABLE
        }).dialogState.editable).toBeTruthy();
    });
    it('should return initial state of all fields', () => {
        assertInitialState(undefined, {});
    });
    it('should return the modified username field with success state when receiving UPDATE_USERNAME_FIELD action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: dummyUsername,
            allUsers: dummyUsers
        });
        expect(returnValue.userInDialog
            .username.value).toEqual(dummyUsername);
        expect(returnValue.userInDialog
            .username.state).toEqual("success");
    });
    it('should return the empty username field with null state when receiving UPDATE_USERNAME_FIELD action with empty username', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: "",
            allUsers: dummyUsers
        });
        expect(returnValue.userInDialog
            .username.value).toEqual("");
        expect(returnValue.userInDialog
            .username.state).toBeNull();
    });
    it('should return the username field with error state when receiving UPDATE_USERNAME_FIELD action with existing username', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: "admin",
            allUsers: dummyUsers
        });
        expect(returnValue.userInDialog
            .username.value).toEqual("admin");
        expect(returnValue.userInDialog
            .username.state).toBe("error");
    });
    it('should return the username field with error state when receiving UPDATE_USERNAME_FIELD action with uppercase existing username', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_USERNAME_FIELD,
            username: "Admin",
            allUsers: dummyUsers
        });
        expect(returnValue.userInDialog
            .username.value).toEqual("Admin");
        expect(returnValue.userInDialog
            .username.state).toBe("error");
    });
    it('should return the modified timeout field with success state when receiving UPDATE_TIMEOUT_FIELD action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: dummyTimeout
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(50);
        expect(returnValue.userInDialog.timeout.state).toEqual("success");
    });   
    it('should return NaN timeout field with null state when receiving UPDATE_TIMEOUT_FIELD action with empty timeout', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: ""
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(NaN);
        expect(returnValue.userInDialog.timeout.state).toBeNull();
    });  
    it('should return the last valid timeout field with success state when receiving UPDATE_TIMEOUT_FIELD action with invalid timeout', () => {
        const returnValue = userDialogs({
            userInDialog: {
                timeout: {
                    value: 15,
                    state: "success"
                }
            }
        }, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: "15s"
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(15);
        expect(returnValue.userInDialog.timeout.state).toEqual("success");
    }); 
    it('should return NaN or null timeout field with null state when receiving UPDATE_TIMEOUT_FIELD action with invalid timeout from empty', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_TIMEOUT_FIELD,
            timeout: "s"
        });
        expect(returnValue.userInDialog.timeout.value).toEqual(NaN);
        expect(returnValue.userInDialog.timeout.state).toBeNull;
    });
    it('should return the modified password field with success state when receiving UPDATE_PASSWORD_FIELD action', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        });
        expect(returnValue.userInDialog.password.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.password.state).toEqual("success");
    });
    it('should return the empty password field with null state when receiving UPDATE_PASSWORD_FIELD action with empty password', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: ""
        });
        expect(returnValue.userInDialog.password.value).toEqual("");
        expect(returnValue.userInDialog.password.state).toBeNull();
    });
    it('should return the password field with error state when receiving UPDATE_PASSWORD_FIELD action with bad password', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: "pass"
        });
        expect(returnValue.userInDialog.password.value).toEqual("pass");
        expect(returnValue.userInDialog.password.state).toBe("error");
    });
    it('should return the password field with warning state when receiving UPDATE_PASSWORD_FIELD action with weak password', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: "admin123"
        });
        expect(returnValue.userInDialog.password.value).toEqual("admin123");
        expect(returnValue.userInDialog.password.state).toBe("warning");
    });
    it('should return the success state of confirm password field when receiving UPDATE_PASSWORD_FIELD action with macthing password', () => {
        const returnValue = userDialogs({
            userInDialog: {
                confirmPassword: {
                    value: dummyPassword,
                    state: "error"
                }
            }
        }, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        });
        expect(returnValue.userInDialog.password.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.confirmPassword.state).toBe("success");
    });
    it('should return the null state of confirm password field when receiving UPDATE_PASSWORD_FIELD action with empty confirm password', () => {
        const returnValue = userDialogs({
            userInDialog: {
                confirmPassword: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.UPDATE_PASSWORD_FIELD,
            password: dummyPassword
        });
        expect(returnValue.userInDialog.password.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.confirmPassword.state).toBeNull();
    });
    it('should return the modified confirm password field with success state when receiving UPDATE_CONFIRM_PASSWORD_FIELD action', () => {
        const returnValue = userDialogs({
            userInDialog: {
                password: {
                    value: dummyPassword
                }
            }
        }, {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        });
        expect(returnValue.userInDialog.confirmPassword.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.confirmPassword.state).toEqual("success");
    });
    it('should return the empty confirm password field with null state when receiving UPDATE_CONFIRM_PASSWORD_FIELD action with empty confirmPassword', () => {
        const returnValue = userDialogs(undefined, {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: ""
        });
        expect(returnValue.userInDialog.confirmPassword.value).toEqual("");
        expect(returnValue.userInDialog.confirmPassword.state).toBeNull();
    });
    it('should return the error state when receiving UPDATE_CONFIRM_PASSWORD_FIELD action with different confirmPassword to password', () => {
        const returnValue = userDialogs({
            userInDialog: {
                password: {
                    value: "dummyPassword"
                }
            }
        }, {
            type: actionTypes.UPDATE_CONFIRM_PASSWORD_FIELD,
            confirmPassword: dummyPassword
        });
        expect(returnValue.userInDialog.confirmPassword.value).toEqual(dummyPassword);
        expect(returnValue.userInDialog.confirmPassword.state).toBe("error");
    });
    it('should return all null required fields with error state and dialogState of error when receiving ADD_USER action', () => {
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: null,
                    state: null
                },
                timeout: {
                    value: null,
                    state: null
                },
                password: {
                    value: null,
                    state: null
                },
                confirmPassword: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_USER
        });
        expect(returnValue.userInDialog.username.state).toBe("error");
        expect(returnValue.userInDialog.timeout.state).toBe("error");
        expect(returnValue.userInDialog.password.state).toBe("error");
        expect(returnValue.userInDialog.confirmPassword.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return all empty required fields with error state and dialogState of error when receiving ADD_USER action', () => {
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: "",
                    state: null
                },
                timeout: {
                    value: "",
                    state: null
                },
                password: {
                    value: "",
                    state: null
                },
                confirmPassword: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.ADD_USER
        });
        expect(returnValue.userInDialog.username.state).toBe("error");
        expect(returnValue.userInDialog.timeout.state).toBe("error");
        expect(returnValue.userInDialog.password.state).toBe("error");
        expect(returnValue.userInDialog.confirmPassword.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return timeout null required fields with error state and dialogState of error when receiving SAVE_USER action', () => {
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: null,
                    state: null
                },
                timeout: {
                    value: null,
                    state: null
                },
                password: {
                    value: null,
                    state: null
                },
                confirmPassword: {
                    value: null,
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_USER
        });
        expect(returnValue.userInDialog.timeout.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return timeout empty required fields with error state and dialogState of error when receiving SAVE_USER action', () => {
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                title: "",
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: "",
                    state: null
                },
                timeout: {
                    value: "",
                    state: null
                },
                password: {
                    value: "",
                    state: null
                },
                confirmPassword: {
                    value: "",
                    state: null
                }
            }
        }, {
            type: actionTypes.SAVE_USER
        });
        expect(returnValue.userInDialog.timeout.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the state of all fields that are success or warning and dialogState of error when receiving ADD_USER action with an invalid username', () => {
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.ADD_USER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: "admin",
                    state: "error"
                },
                timeout: {
                    value: "10",
                    state: "success"
                },
                password: {
                    value: "123456789",
                    state: "warning"
                },
                confirmPassword: {
                    value: "123456789",
                    state: "success"
                }
            }
        }, {
            type: actionTypes.ADD_USER
        });
        expect(returnValue.userInDialog.username.state).toBe("error");
        expect(returnValue.userInDialog.password.state).toBe("warning");
        expect(returnValue.userInDialog.confirmPassword.state).toBe("success");
        expect(returnValue.userInDialog.timeout.state).toBe("success");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the state of all fields that are success or warning and dialogState of error when receiving SAVE_USER action with an invalid username', () => {
        const returnValue = userDialogs({
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_USER,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: "admin",
                    state: "success"
                },
                timeout: {
                    value: "",
                    state: "error"
                },
                password: {
                    value: "123456789",
                    state: "warning"
                },
                confirmPassword: {
                    value: "123456789",
                    state: "success"
                }
            }
        }, {
            type: actionTypes.SAVE_USER
        });
        expect(returnValue.userInDialog.username.state).toBe("success");
        expect(returnValue.userInDialog.password.state).toBe("warning");
        expect(returnValue.userInDialog.confirmPassword.state).toBe("success");
        expect(returnValue.userInDialog.timeout.state).toBe("error");
        expect(returnValue.dialogState.error).toBe(true);
    });
    it('should return the initial state when receiving ADD_USER action with valid inputs', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.ADD_USER,
                mode: dialogModes.ADD_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: "admin2",
                    state: "success"
                },
                timeout: {
                    value: "10",
                    state: "success"
                },
                password: {
                    value: "123456789",
                    state: "warning"
                },
                confirmPassword: {
                    value: "123456789",
                    state: "success"
                }
            }
        };
        const action = {
            type: actionTypes.ADD_USER
        };
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving SAVE_USER action with valid inputs', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_USER,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: "admin2",
                    state: "success"
                },
                timeout: {
                    value: "10",
                    state: "success"
                },
                password: {
                    value: null,
                    state: null
                },
                confirmPassword: {
                    value: null,
                    state: null
                }
            }
        };
        const action = {
            type: actionTypes.SAVE_USER
        };
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
    it('should return the initial state when receiving CHANGE_MODE_ADMIN action', () => {
        const state = {
            dialogState: {
                open: false,
                title: dialogTitles.EDIT_USER,
                mode: dialogModes.EDIT_MODE,
                error: false,
                editable: false
            },
            userInDialog: {
                id: null,
                username: {
                    value: "admin2",
                    state: "success"
                },
                timeout: {
                    value: "10",
                    state: "success"
                },
                password: {
                    value: null,
                    state: null
                },
                confirmPassword: {
                    value: null,
                    state: null
                }
            }
        };
        const action = {
            type: actionTypes.CHANGE_MODE_ADMIN
        };
        assertInitialDialogState(state, action);
        assertInitialState(state, action);
    });
});