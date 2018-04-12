import stocks from "../../reducers/records/stocks";

describe('Stock Store', () => {
    it('should return initial state of 0 stocks', () => {
        expect(stocks(undefined, {})).toHaveLength(0);
    });
});