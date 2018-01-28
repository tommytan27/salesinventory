import users from './../reducers/users';

describe('Users Store', () => {
    it('should return initial state of 3 users', () => {
        expect(users(undefined, {})).toHaveLength(3);
    });
});