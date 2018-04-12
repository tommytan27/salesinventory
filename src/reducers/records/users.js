import actionTypes from './../../constants/actionTypes';

const testUsers = [
    {id: 1, username: "admin", timeout: 10}
];

const users = (state = testUsers, action) => {
    let currentLength = state.length;
    switch (action.type) {
        case actionTypes.ADD_USER:
            return [...state, {
                id: currentLength + 1,
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
        default:
            return state;
    }
}

export default users;