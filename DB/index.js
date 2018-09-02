const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');

const usersConnectors = require("./connectors/usersConnectors");
const customersConnectors = require("./connectors/customersConnectors");
const suppliersConnectors = require("./connectors/suppliersConnectors");
const brandsConnectors = require("./connectors/brandsConnectors");
const itemsConnectors = require("./connectors/itemsConnectors");

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(500);
    res.render("error", { error: err });
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

//LOGIN API
app.post('/api/login', (req, res, next) => {
    console.log("Login request accepted");
    let username = req.body.username;
    let password = req.body.password;

    usersConnectors.loginVerifier(res, pool, next, username, password);
});

//USERS API
app.get('/api/users/get', (req, res, next) => {
    console.log("Get-Users request accepted");
    usersConnectors.getUsers(res, pool, next);
});

app.post('/api/users/add', (req, res, next) => {
    console.log("Add-User request accepted");
    usersConnectors.addUser(res, pool, next, {
        username: req.body.username,
        password: req.body.password,
        timeout: req.body.timeout
    });
}, (req, res, next) => {
    console.log("Add-User request is being responded");
    usersConnectors.respondAddUser(res, pool, next);
});

app.post('/api/users/delete', (req, res, next) => {
    console.log("Delete-User request accepted");
    usersConnectors.deleteUser(res, pool, next, {
        id: req.body.id
    });
});

app.post('/api/users/edit', (req, res, next) => {
    console.log("Edit-User request accepted");
    usersConnectors.editUser(res, pool, next, {
        id: req.body.id,
        timeout: req.body.timeout
    });
});

//CUSTOMERS API
app.get('/api/customers/get', (req, res, next) => {
    console.log("Get-Customers request accepted");
    customersConnectors.getCustomers(res, pool, next);
});

app.post('/api/customers/add', (req, res, next) => {
    console.log("Add-Customer request accepted");
    customersConnectors.addCustomer(res, pool, next, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contact: req.body.contact
    });
}, (req, res, next) => {
    console.log("Add-Customer request is being responded");
    customersConnectors.respondAddCustomer(res, pool, next);
});

app.post('/api/customers/delete', (req, res, next) => {
    console.log("Delete-Customer request accepted");
    customersConnectors.deleteCustomer(res, pool, next, {
        id: req.body.id
    });
});

app.post('/api/customers/edit', (req, res, next) => {
    console.log("Edit-Customer request accepted");
    customersConnectors.editCustomer(res, pool, next, {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contact: req.body.contact
    });
});

//SUPPLIERS API
app.get('/api/suppliers/get', (req, res, next) => {
    console.log("Get-Suppliers request accepted");
    suppliersConnectors.getSuppliers(res, pool, next);
});

app.post('/api/suppliers/add', (req, res, next) => {
    console.log("Add-Supplier request accepted");
    suppliersConnectors.addSupplier(res, pool, next, {
        name: req.body.name,
        contact: req.body.contact
    });
}, (req, res, next) => {
    console.log("Add-Supplier request is being responded");
    suppliersConnectors.respondAddSupplier(res, pool, next);
});

app.post('/api/suppliers/delete', (req, res, next) => {
    console.log("Delete-Supplier request accepted");
    suppliersConnectors.deleteSupplier(res, pool, next, {
        id: req.body.id
    });
});

app.post('/api/suppliers/edit', (req, res, next) => {
    console.log("Edit-Supplier request accepted");
    suppliersConnectors.editSupplier(res, pool, next, {
        id: req.body.id,
        name: req.body.name,
        contact: req.body.contact
    });
});

//BRANDS API
app.get('/api/brands/get', (req, res, next) => {
    console.log("Get-Brands request accepted");
    brandsConnectors.getBrands(res, pool, next);
});

app.post('/api/brands/add', (req, res, next) => {
    console.log("Add-Brand request accepted");
    brandsConnectors.addBrand(res, pool, next, {
        name: req.body.name
    });
}, (req, res, next) => {
    console.log("Add-Brand request is being responded");
    brandsConnectors.respondAddBrand(res, pool, next);
});

app.post('/api/brands/delete', (req, res, next) => {
    console.log("Delete-Brand request accepted");
    brandsConnectors.deleteBrand(res, pool, next, {
        id: req.body.id
    });
});

app.post('/api/brands/edit', (req, res, next) => {
    console.log("Edit-Brand request accepted");
    brandsConnectors.editBrand(res, pool, next, {
        id: req.body.id,
        name: req.body.name
    });
});

//ITEMS API
app.get('/api/items/get', (req, res, next) => {
    console.log("Get-Items request accepted");
    itemsConnectors.getItems(res, pool, next);
});

app.post('/api/items/add', (req, res, next) => {
    console.log("Add-Item request accepted");
    itemsConnectors.addItem(res, pool, next, {
        barcode: req.body.barcode,
        name: req.body.name,
        supplierId: req.body.supplierId,
        brandId: req.body.brandId,
        price: req.body.price,
        vegan: req.body.vegan,
        qty: req.body.qty
    });
}, (req, res, next) => {
    console.log("Add-Item request is being responded");
    itemsConnectors.respondAddItem(res);
});

app.post('/api/items/delete', (req, res, next) => {
    console.log("Delete-Item request accepted");
    itemsConnectors.deleteItem(res, pool, next, {
        barcode: req.body.barcode
    });
});

app.post('/api/items/edit', (req, res, next) => {
    console.log("Edit-Item request accepted");
    itemsConnectors.editItem(res, pool, next, {
        barcode: req.body.barcode,
        name: req.body.name,
        supplierId: req.body.supplierId,
        brandId: req.body.brandId,
        price: req.body.price,
        costPrice: req.body.costPrice,
        vegan: req.body.vegan
    });
});

app.listen(PORT, () => console.log('Sales Inventory DB is running on port: ' + PORT));