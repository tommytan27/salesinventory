import customers from './../../reducers/records/customers';
import actionTypes from './../../constants/actionTypes';

describe('Customers Store', () => {
    it('should return the list of customer with the added customer when receiving ADD_CUSTOMER action', () => {
        const expectedCustomer = {
            id: 4,
            firstName: "Tommy",
            lastName: "Tanzil",
            contact: "0425927766",
            crdit: 2.0
        }
        var returnValues = customers(undefined, {
            type: actionTypes.ADD_CUSTOMER,
            customer: expectedCustomer
        });
        expect(returnValues).toHaveLength(1);
        expect(returnValues[0].id).toEqual(expectedCustomer.id);
        expect(returnValues[0].firstName).toEqual(expectedCustomer.firstName);
        expect(returnValues[0].lastName).toEqual(expectedCustomer.lastName);
        expect(returnValues[0].contact).toEqual(expectedCustomer.contact);
        expect(returnValues[0].credit).toEqual(0.0);
    });
    it('should return the list of customers with the modified customer when receiving SAVE_CUSTOMER action', () => {
        const expectedCustomer = {
            id: 0,
            firstName: "Tommy",
            lastName: "Tanzil",
            contact: "0425927766",
            credit: 2.0
        }
        var returnValues = customers([{
            id: 0,
            firstName: "Tommy",
            lastName: "Tanzil",
            contact: "contact",
            credit: 2.0
        }], {
            type: actionTypes.SAVE_CUSTOMER,
            customer: expectedCustomer
        });
        expect(returnValues).toHaveLength(1);
        expect(returnValues[0].firstName).toEqual(expectedCustomer.firstName);
        expect(returnValues[0].lastName).toEqual(expectedCustomer.lastName);
        expect(returnValues[0].contact).toEqual(expectedCustomer.contact);
        expect(returnValues[0].credit).toEqual(2.0);
    });
    it('should return the list of customers without the deleted customer when receiving DELETE_CUSTOMER action', () => {
        var returnValues = customers([
            {id: 0, firstName: "Anonymous", lastName: "Anonymous", contact: "", credit: 0.00},
            {id: 1, firstName: "Tommy", lastName: "Tanzil", contact: "0425927766", credit: 2.0}
        ], {
            type: actionTypes.DELETE_CUSTOMER,
            customerId: 1
        });
        expect(returnValues).toHaveLength(1);
    });
    it('should return the updated credit of customer when receiving ADD_SALES action', () => {
        var returnValues = customers([
            {id: 0, firstName: "Anonymous", lastName: "Anonymous", contact: "", credit: 0.00},
            {id: 1, firstName: "Tommy", lastName: "Tanzil", contact: "0425927766", credit: 2.0}
        ], {
            type: actionTypes.ADD_SALES,
            sales: {
                customerId: 1
            },
            customerCredit: 5.00
        });
        expect(returnValues[1].credit).toEqual(5);
    });
    it('should return the updated customers list when receiving UPDATE_CUSTOMERS action', () => {
        var updatedCustomers = [
            {id: 0, firstName: "Anonymous", lastName: "Anonymous", contact: "", credit: 0.00},
            {id: 1, firstName: "Tommy", lastName: "Tanzil", contact: "0425927766", credit: 2.0}
        ]
        var returnValues = customers([
            {id: 0, firstName: "Anonymous", lastName: "Anonymous", contact: "", credit: 0.00}], {
            type: actionTypes.UPDATE_CUSTOMERS,
            customers: updatedCustomers
        });
        expect(returnValues).toHaveLength(2);
        expect(returnValues[0].id).toEqual(0);
        expect(returnValues[1].id).toEqual(1);
    });
})