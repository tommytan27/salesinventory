import sales from "../../reducers/records/sales";

describe('Sales Store', () => {
    it('should return initial state of 0 sales', () => {
        expect(sales(undefined, {})).toHaveLength(0);
    });
});