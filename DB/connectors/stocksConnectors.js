// exports.getItems = (res, pool, next) => {
//     pool.connect((err, db, done) => {
//         if(err) {
//             next(err);
//         }
//         else {
//             db.query('SELECT * FROM items',
//             (err, table) => {
//                 if(err) {
//                     next(err);
//                 }
//                 else {
//                     if(table.rows.length > 0) {
//                         res.status(200).send({
//                             items: table.rows.map((row) => {
//                                 return {
//                                     barcode: row.barcode,
//                                     name: row.name,
//                                     supplierId: row.supplier_id,
//                                     brandId: row.brand_id,
//                                     price: parseFloat(row.price),
//                                     costPrice: parseFloat(row.cost_price),
//                                     vegan: row.vegan,
//                                     qty: parseInt(row.qty)
//                                 };
//                             })
//                         });
//                     }
//                     else{
//                         res.status(200).send({
//                             items: []
//                         });
//                     }
//                 }   
//             });
//         }
//     });
// };

exports.addStock = (res, pool, next, newStock) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('INSERT INTO stocks(id, date) VALUES($1, $2)',
            [newStock.id, newStock.date],
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

exports.addStockRecords = (res, pool, next, newStock) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            newStock.details.forEach((detail) => {
                db.query('INSERT INTO stock_records(stock_id, barcode, qty, sell_price, cost_price) VALUES($1, $2, $3, $4, $5)',
                [newStock.id, detail.barcode, detail.qty, detail.sellPrice, detail.costPrice],
                (err, table) => {
                    if(err) {
                        next(err);
                    }
                    else{
                        next();
                    }                
                });
            });
        }
    });
}

exports.updateItemRecords = (res, pool, next, newStock) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            newStock.details.forEach((detail) => {
                db.query('SELECT qty FROM items where barcode = $1',
                [detail.barcode],
                (err, table) => {
                    if(err) {
                        next(err);
                    }
                    else {
                        let newQty = parseInt(detail.qty);
                        if(table.rows.length > 0) {
                            newQty += parseInt(table.rows[0].qty);
                        }
                        db.query('UPDATE items SET qty = $2, cost_price = $3 WHERE barcode = $1',
                        [detail.barcode, newQty, detail.costPrice],
                        (err, table) => {
                            if(err) {
                                next(err);
                            }
                            else{
                                next();
                            }                
                        });
                    }   
                });
            });
        }
    });
}

exports.respondAddStock = (res) => {    
    res.status(200).send("Stock has been added successfully");
}