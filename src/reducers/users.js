const testUsers = [
    {id: 1, username: "admin", timeout: 10},
    {id: 2, username: "ttanzil", timeout: 10},
    {id: 3, username: "hwinarto", timeout: 10}
];

const users = (state = [], action) => {
    return testUsers;
}

export default users;