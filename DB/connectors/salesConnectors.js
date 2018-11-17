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

exports.addSales = (res, pool, next, newSales) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('INSERT INTO sales(id, date, customer_id) VALUES($1, $2, $3)',
            [newSales.id, newSales.date, newSales.customerId],
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

exports.addSalesRecords = (res, pool, next, newSales) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            newSales.details.forEach((detail) => {
                db.query('INSERT INTO sales_records(sales_id, barcode, qty) VALUES($1, $2, $3)',
                [newSales.id, detail.barcode, detail.qty],
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

exports.updateItemQty = (res, pool, next, newSales) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            newSales.details.forEach((detail) => {
                db.query('SELECT qty FROM items where barcode = $1',
                [detail.barcode],
                (err, table) => {
                    if(err) {
                        next(err);
                    }
                    else {
                        let newQty = 0;
                        if(table.rows.length > 0) {
                            newQty = parseInt(table.rows[0].qty) - parseInt(detail.qty);
                            db.query('UPDATE items SET qty = $2 WHERE barcode = $1',
                            [detail.barcode, newQty],
                            (err, table) => {
                                if(err) {
                                    next(err);
                                }
                                else{
                                    next();
                                }                
                            });
                        }
                        else {
                            next();
                        }
                    }   
                });
            });
        }
    });
}