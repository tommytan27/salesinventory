import sales from "../../reducers/records/sales";

describe('Sales Store', () => {
    it('should return initial state of 3 sales', () => {
        expect(sales(undefined, {})).toHaveLength(3);
    });
});