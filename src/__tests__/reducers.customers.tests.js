import customers from './../reducers/customers';

describe('Customers Store', () => {
    it('should return state of 3 customers', () => {
        expect(customers(undefined, {})).toHaveLength(3);
    });
})