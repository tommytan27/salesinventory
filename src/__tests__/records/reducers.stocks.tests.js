import stocks from "../../reducers/records/stocks";

describe('Stock Store', () => {
    it('should return initial state of 3 stocks', () => {
        expect(stocks(undefined, {})).toHaveLength(3);
    });
});