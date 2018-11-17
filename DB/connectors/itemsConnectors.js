exports.getItems = (res, pool, next) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('SELECT * FROM items ORDER BY name',
            (err, table) => {
                if(err) {
                    next(err);
                }
                else {
                    if(table.rows.length > 0) {
                        res.status(200).send({
                            items: table.rows.map((row) => {
                                return {
                                    barcode: row.barcode,
                                    name: row.name,
                                    supplierId: row.supplier_id,
                                    brandId: row.brand_id,
                                    price: parseFloat(row.price),
                                    costPrice: parseFloat(row.cost_price),
                                    vegan: row.vegan,
                                    qty: parseInt(row.qty)
                                };
                            })
                        });
                    }
                    else{
                        res.status(200).send({
                            items: []
                        });
                    }
                }   
            });
        }
    });
};

exports.addItem = (res, pool, next, newItem) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('INSERT INTO items(barcode, name, supplier_id, brand_id, price, vegan, qty) VALUES($1, $2, $3, $4, $5, $6, $7)',
            [newItem.barcode, newItem.name, newItem.supplierId, newItem.brandId, newItem.price, newItem.vegan, newItem.qty],
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

exports.respondAddItem = (res) => {    
    res.status(200).send("Item has been added successfully");
}

exports.editItem = (res, pool, next, editedItem) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('UPDATE items SET name = $2, supplier_id = $3, brand_id = $4, price = $5, cost_price = $6, vegan = $7, qty = $8 WHERE barcode = $1',
            [editedItem.barcode, editedItem.name, editedItem.supplierId, editedItem.brandId, editedItem.price, editedItem.costPrice, editedItem.vegan, editedItem.qty],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Item has been edited successfully.");
            });
        }
    });
};

exports.deleteItem = (res, pool, next, deletedItem) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('DELETE FROM items WHERE barcode = $1',
            [deletedItem.barcode],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("Item has been deleted successfully.");
            });
        }
    });
};