exports.getCustomers = (res, pool, next) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('SELECT * FROM customers ORDER BY id',
            (err, table) => {
                if(err) {
                    next(err);
                }
                else {
                    if(table.rows.length > 0) {
                        res.status(200).send({
                            customers: table.rows.map((row) => {
                                return {
                                    id: row.id,
                                    firstName: row.first_name,
                                    lastName: row.last_name,
                                    contact: row.contact,
                                    credit: parseFloat(row.credit)
                                };
                            })
                        });
                    }
                    else{
                        res.status(200).send({
                            customers: []
                        });
                    }
                }   
            });
        }
    });
};

exports.addCustomer = (res, pool, next, newCustomer) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('INSERT INTO customers(first_name, last_name, contact) VALUES($1, $2, $3)',
            [newCustomer.firstName, newCustomer.lastName, newCustomer.contact],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                else{
                    next();
                }
            });
        }
    });
};

exports.respondAddCustomer = (res, pool, next) => {
    pool.connect((err, db, done) => {
        db.query('SELECT id FROM customers ORDER BY id DESC',
        (err, table) => {
            done();
            if(err) {
                next(err);
            }
            res.status(200).send({
                customerId: table.rows[0].id
            });
        });
    });
}

exports.editCustomer = (res, pool, next, editedCustomer) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('UPDATE customers SET first_name = $2, last_name = $3, contact = $4 WHERE id = $1',
            [editedCustomer.id, editedCustomer.firstName, editedCustomer.lastName, editedCustomer.contact],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Customer has been edited successfully.");
            });
        }
    });
};

exports.deleteCustomer = (res, pool, next, deletedCustomer) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('DELETE FROM customers WHERE id = $1',
            [deletedCustomer.id],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Customer has been deleted successfully.");
            });
        }
    });
};

exports.updateCustomerCredit = (res, pool, next, updatedCustomer) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('UPDATE customers SET credit = $2 WHERE id = $1',
            [updatedCustomer.id, updatedCustomer.credit],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                else {
                    next();
                }
            });
        }
    });
};