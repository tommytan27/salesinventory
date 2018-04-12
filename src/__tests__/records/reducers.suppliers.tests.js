import suppliers from "../../reducers/records/suppliers";
import actionTypes from "../../constants/actionTypes";

const initialLength = 0;

describe('Suppliers Store', () => {
    it('should return the list of suppliers with the added supplier when receiving ADD_SUPPLIER action', () => {
        const expectedSupplier = {
            id: null,
            name: "Supplier",
            contact: "contact"
        };
        var returnValues = suppliers(undefined, {
            type: actionTypes.ADD_SUPPLIER,
            supplier: expectedSupplier
        });
        expect(returnValues).toHaveLength(initialLength + 1);
        expect(returnValues[initialLength].name).toEqual(expectedSupplier.name);
        expect(returnValues[initialLength].contact).toEqual(expectedSupplier.contact);
    });
    it('should return the list of suppliers with the modified supplier when receiving SAVE_SUPPLIER action', () => {
        const expectedSupplier = {
            id: 1,
            name: "Supplier",
            contact: "contact"
        };
        var returnValues = suppliers([{
            id: 1,
            name: "Dummy",
            contact: "Dummy"
        }], {
            type: actionTypes.SAVE_SUPPLIER,
            supplier: expectedSupplier
        });
        expect(returnValues).toHaveLength(1);
        expect(returnValues[0].name).toEqual(expectedSupplier.name);
        expect(returnValues[0].contact).toEqual(expectedSupplier.contact);
    });
});