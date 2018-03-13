import suppliers from "../../reducers/records/suppliers";

describe('Suppliers Store', () => {
    it('should return initial state of 3 suppliers', () => {
        expect(suppliers(undefined, {})).toHaveLength(3);
    });
});