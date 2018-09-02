import users from './../../reducers/records/users';
import actionTypes from './../../constants/actionTypes';

const initialLength = 0;

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
            timeout: 15
        };
        var returnValues = users([{
            id: 1,
            username: "admin",
            timeout: 10
        }], {
            type: actionTypes.SAVE_USER,
            user: expectedUser
        });
        expect(returnValues).toHaveLength(1);
        expect(returnValues[0].timeout).toEqual(expectedUser.timeout);
    });
    it('should return the list of users without the deleted user when receiving DELETE_USER action', () => {
        var returnValues = users([
            {
                id: 1,
                username: "admin",
                timeout: 15
            },
            {
                id: 2,
                username: "ttanzil",
                timeout: 10
            }
        ], {
            type: actionTypes.DELETE_USER,
            userId: 2
        });
        expect(returnValues).toHaveLength(1);
        expect(returnValues[0].id).toEqual(1);
    });
    it('should return the updated users list when receiving UPDATE_USERS action', () => {
        var updatedUsers = [
            {
                id: 1,
                username: "admin",
                timeout: 15
            },
            {
                id: 2,
                username: "ttanzil",
                timeout: 10
            }
        ]
        var returnValues = users([
            {
                id: 1,
                username: "admin",
                timeout: 15
            }], {
            type: actionTypes.UPDATE_USERS,
            users: updatedUsers
        });
        expect(returnValues).toHaveLength(2);
        expect(returnValues[0].id).toEqual(1);
        expect(returnValues[1].id).toEqual(2);
    });
});