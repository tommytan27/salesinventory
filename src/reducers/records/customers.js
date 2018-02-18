const testCustomers = [
    {id: 1, firstName: "Tommy", lastName: "Tanzil", contact: "0425927766", credit: 2.50},
    {id: 2, firstName: "Shella", lastName: "Deviora", contact: "0406001888", credit: 10.00},
    {id: 3, firstName: "Hendry", lastName: "Winarto", contact: "0425927766", credit: 0.00}
];

const customers = (state = [], action) => {
    return testCustomers;
}

export default customers;