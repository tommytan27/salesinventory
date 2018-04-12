import credits from "../../reducers/records/credits";

describe('Credits Store', () => {
    it('should return initial state of 0 credits', () => {
        expect(credits(undefined, {})).toHaveLength(0);
    });
});