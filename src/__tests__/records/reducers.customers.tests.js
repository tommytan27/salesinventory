import customers from './../../reducers/records/customers';

describe('Customers Store', () => {
    it('should return state of 4 customers', () => {
        expect(customers(undefined, {})).toHaveLength(4);
    });
})