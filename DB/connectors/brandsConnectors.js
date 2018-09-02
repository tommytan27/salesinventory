exports.getBrands = (res, pool, next) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('SELECT * FROM brands',
            (err, table) => {
                if(err) {
                    next(err);
                }
                else {
                    if(table.rows.length > 0) {
                        res.status(200).send({
                            brands: table.rows.map((row) => {
                                return {
                                    id: row.id,
                                    name: row.name
                                };
                            })
                        });
                    }
                    else{
                        res.status(200).send({
                            brands: []
                        });
                    }
                }   
            });
        }
    });
};

exports.addBrand = (res, pool, next, newBrand) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('INSERT INTO brands(name) VALUES($1)',
            [newBrand.name],
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

exports.respondAddBrand = (res, pool, next) => {
    pool.connect((err, db, done) => {
        db.query('SELECT id FROM brands ORDER BY id DESC',
        (err, table) => {
            done();
            if(err) {
                next(err);
            }
            res.status(200).send({
                brandId: table.rows[0].id
            });
        });
    });
}

exports.editBrand = (res, pool, next, editedBrand) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('UPDATE brands SET name = $2 WHERE id = $1',
            [editedBrand.id, editedBrand.name],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Brand has been edited successfully.");
            });
        }
    });
};

exports.deleteBrand = (res, pool, next, deletedBrand) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('DELETE FROM brands WHERE id = $1',
            [deletedBrand.id],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Brand has been deleted successfully.");
            });
        }
    });
};