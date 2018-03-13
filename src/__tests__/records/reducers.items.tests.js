import items from "../../reducers/records/items";

describe('Items Store', () => {
    it('should return initial state of 3 items', () => {
        expect(items(undefined, {})).toHaveLength(3);
    });
});