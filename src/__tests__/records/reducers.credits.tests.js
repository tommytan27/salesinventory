import credits from "../../reducers/records/credits";

describe('Credits Store', () => {
    it('should return initial state of 3 credits', () => {
        expect(credits(undefined, {})).toHaveLength(3);
    });
});