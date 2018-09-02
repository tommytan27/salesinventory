exports.getSuppliers = (res, pool, next) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('SELECT * FROM suppliers',
            (err, table) => {
                if(err) {
                    next(err);
                }
                else {
                    if(table.rows.length > 0) {
                        res.status(200).send({
                            suppliers: table.rows.map((row) => {
                                return {
                                    id: row.id,
                                    name: row.name,
                                    contact: row.contact
                                };
                            })
                        });
                    }
                    else{
                        res.status(200).send({
                            suppliers: []
                        });
                    }
                }   
            });
        }
    });
};

exports.addSupplier = (res, pool, next, newSupplier) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('INSERT INTO suppliers(name, contact) VALUES($1, $2)',
            [newSupplier.name, newSupplier.contact],
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

exports.respondAddSupplier = (res, pool, next) => {
    pool.connect((err, db, done) => {
        db.query('SELECT id FROM suppliers ORDER BY id DESC',
        (err, table) => {
            done();
            if(err) {
                next(err);
            }
            res.status(200).send({
                supplierId: table.rows[0].id
            });
        });
    });
}

exports.editSupplier = (res, pool, next, editedSupplier) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('UPDATE suppliers SET name = $2, contact = $3 WHERE id = $1',
            [editedSupplier.id, editedSupplier.name, editedSupplier.contact],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Supplier has been edited successfully.");
            });
        }
    });
};

exports.deleteSupplier = (res, pool, next, deletedSupplier) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('DELETE FROM suppliers WHERE id = $1',
            [deletedSupplier.id],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Supplier has been deleted successfully.");
            });
        }
    });
};