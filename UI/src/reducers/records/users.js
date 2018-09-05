import actionTypes from './../../constants/actionTypes';

const users = (state = [], action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.UPDATE_USERS:
            return action.users;
        case actionTypes.ADD_USER:
            return [...state, {
                id: action.user.id,
                username: action.user.username,
                timeout: action.user.timeout
            }];
        case actionTypes.SAVE_USER:
            return state.map((user) => (
                user.id === action.user.id ? {
                    ...user,
                    timeout: action.user.timeout
                } : user
            ));
        case actionTypes.DELETE_USER:
            return state.filter((user) => {
                return user.id !== action.userId;
            });
        default:
            return state;
    }
}

export default users;