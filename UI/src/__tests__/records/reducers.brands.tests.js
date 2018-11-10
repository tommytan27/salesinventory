import brands from "../../reducers/records/brands";
import actionTypes from './../../constants/actionTypes';

const initialLength = 0;

describe('Brands Store', () => {
    it('should return the list of brands with the added brand when receiving ADD_BRAND action', () => {
        const expectedBrand = {
            id: null,
            name: "Brand",
        };
        var returnValues = brands(undefined, {
            type: actionTypes.ADD_BRAND,
            brand: expectedBrand
        });
        expect(returnValues).toHaveLength(initialLength + 1);
        expect(returnValues[initialLength].name).toEqual(expectedBrand.name);
    });
    it('should return the list of brands with the modified brand when receiving SAVE_BRAND action', () => {
        const expectedBrand = {
            id: 1,
            name: "Brand",
        };
        var returnValues = brands([{
            id: 1,
            name: "Dummy"
        }], {
            type: actionTypes.SAVE_BRAND,
            brand: expectedBrand
        });
        expect(returnValues).toHaveLength(1);
        expect(returnValues[0].name).toEqual(expectedBrand.name);
    });
    it('should return the list of brands with the modified brand when receiving DELETE_BRAND action', () => {
        const expectedBrand = {
            id: 1,
            name: "Brand",
        };
        var returnValues = brands([{
            id: 1,
            name: "Dummy"
        }], {
            type: actionTypes.DELETE_BRAND,
            brandId: 1
        });
        expect(returnValues).toHaveLength(0);
    });
    it('should return the updated list of brands when receiving UPDATE_BRANDS action', () => {
        const updatedBrands = [
            {
                id: 1,
                name: "Brand",
            },
            {
                id: 2,
                name: "Brand2",
            }
        ];
        var returnValues = brands(undefined, {
            type: actionTypes.UPDATE_BRANDS,
            brands: updatedBrands
        });
        expect(returnValues).toHaveLength(2);
        expect(returnValues[0].name).toEqual(updatedBrands[0].name);
        expect(returnValues[1].name).toEqual(updatedBrands[1].name);
    });
});