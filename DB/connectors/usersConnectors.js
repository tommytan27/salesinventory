exports.loginVerifier = (res, pool, next, username, password) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('SELECT * FROM users WHERE username = $1 AND password = $2', 
            [username, password],
            (err, table) => {
                if(err) {
                    next(err);
                }
                else {
                    if(table.rows.length === 1) {
                        res.status(200).send({
                            username: table.rows[0].username,
                            timeout: table.rows[0].timeout
                        });
                    }
                    else {
                        res.status(401).send("User is invalid. Incorrect credentials.");
                    }
                }   
            });
        }
    });
};

exports.getUsers = (res, pool, next) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('SELECT * FROM users',
            (err, table) => {
                if(err) {
                    next(err);
                }
                else {
                    if(table.rows.length > 0) {
                        res.status(200).send({
                            users: table.rows.map((row) => {
                                return {
                                    id: row.id,
                                    username: row.username,
                                    timeout: parseInt(row.timeout)
                                };
                            })
                        });
                    }
                    else{
                        res.status(200).send({
                            users: []
                        });
                    }
                }   
            });
        }
    });
};

exports.addUser = (res, pool, next, newUser) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('INSERT INTO users(username, password, timeout) VALUES($1, $2, $3)',
            [newUser.username, newUser.password, newUser.timeout],
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

exports.respondAddUser = (res, pool, next) => {
    pool.connect((err, db, done) => {
        db.query('SELECT id FROM users ORDER BY id DESC',
        (err, table) => {
            done();
            if(err) {
                next(err);
            }
            res.status(200).send({
                userId: table.rows[0].id
            });
        });
    });
};

exports.editUser = (res, pool, next, editedUser) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('UPDATE users SET timeout = $2 WHERE id = $1',
            [editedUser.id, editedUser.timeout],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("User has been edited successfully.");
            });
        }
    });
};

exports.deleteUser = (res, pool, next, deletedUser) => {
    pool.connect((err, db, done) => {
        if(err) {
            next(err);
        }
        else {
            db.query('DELETE FROM users WHERE id = $1',
            [deletedUser.id],
            (err, table) => {
                done();
                if(err) {
                    next(err);
                }
                res.status(200).send("User has been deleted successfully.");
            });
        }
    });
};