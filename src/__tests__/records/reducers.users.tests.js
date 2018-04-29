import users from './../../reducers/records/users';
import actionTypes from './../../constants/actionTypes';

const initialLength = 1;

describe('Users Store', () => {
    it('should return the list of users with the added user when receiving ADD_USER action', () => {
        const expectedUser = {
            id: null,
            username: "dummy",
            password: "Admin123",
            timeout: 10
        };
        var returnValues = users(undefined, {
            type: actionTypes.ADD_USER,
            user: expectedUser
        });
        expect(returnValues).toHaveLength(initialLength + 1);
        expect(returnValues[initialLength].username).toEqual(expectedUser.username);
        expect(returnValues[initialLength].timeout).toEqual(expectedUser.timeout);
    });
    it('should return the list of users with the modified user when receiving SAVE_USER action', () => {
        const expectedUser = {
            id: 1,
            username: "admin",
            password: null,
            timeout: 15
        };
        var returnValues = users(undefined, {
            type: actionTypes.SAVE_USER,
            user: expectedUser
        });
        expect(returnValues).toHaveLength(initialLength);
        expect(returnValues[0].timeout).toEqual(expectedUser.timeout);
    });
    it('should return the list of users without the deleted user when receiving DELETE_USER action', () => {
        var returnValues = users([
            {
                id: 1,
                username: "admin",
                password: null,
                timeout: 15
            },
            {
                id: 2,
                username: "ttanzil",
                password: null,
                timeout: 10
            }
        ], {
            type: actionTypes.DELETE_USER,
            userId: 2
        });
        expect(returnValues).toHaveLength(initialLength);
        expect(returnValues[0].id).toEqual(1);
    });
});