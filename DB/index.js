const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');

const userConnectors = require("./connectors/usersConnectors");

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const pool = new pg.Pool({
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'salesinventory',
    host: 'localhost',
    max: 10
});



app.get('/', (req, res) => res.send('Welcome to Sales Inventory DB'));

app.post('/api/login', (req, res) => {
    console.log("Login request accepted");
    let username = req.body.username;
    let password = req.body.password;

    userConnectors.loginVerifier(res, pool, username, password);
});

app.get('/api/users/get', (req, res) => {
    console.log("Get-Users request accepted");
    userConnectors.getUsers(res, pool);
});

app.post('/api/users/add', (req, res) => {
    console.log("Add-User request accepted");
    userConnectors.addUser(res, pool, {
        username: req.body.username,
        password: req.body.password,
        timeout: req.body.timeout
    });
});

app.post('/api/users/delete', (req, res) => {
    console.log("Delete-User request accepted");
    userConnectors.deleteUser(res, pool, {
        id: req.body.id
    });
});

app.post('/api/users/edit', (req, res) => {
    console.log("Edit-User request accepted");
    userConnectors.editUser(res, pool, {
        id: req.body.id,
        timeout: req.body.timeout
    });
});

app.listen(PORT, () => console.log('Sales Inventory DB is running on port: ' + PORT));