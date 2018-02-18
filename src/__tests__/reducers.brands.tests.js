import brands from "../reducers/records/brands";

describe('Brands Store', () => {
    it('should return initial state of 3 brands', () => {
        expect(brands(undefined, {})).toHaveLength(3);
    });
});