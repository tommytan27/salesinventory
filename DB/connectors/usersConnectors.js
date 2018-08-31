exports.loginVerifier = (res, pool, username, password) => {
    pool.connect((err, db, done) => {
        if(err) {
            res.status(400).send(err);
        }
        else {
            db.query('SELECT * FROM users WHERE username = $1 AND password = $2', 
            [username, password],
            (err, table) => {
                if(err) {
                    res.status(400).send(err);
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

exports.getUsers = (res, pool) => {
    pool.connect((err, db, done) => {
        if(err) {
            res.status(400).send(err);
        }
        else {
            db.query('SELECT * FROM users',
            (err, table) => {
                if(err) {
                    res.status(400).send(err);
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
                }   
            });
        }
    });
};

exports.addUser = (res, pool, newUser) => {
    pool.connect((err, db, done) => {
        if(err) {
            res.status(400).send(err);
        }
        else {
            db.query('INSERT INTO users(username, password, timeout) VALUES($1, $2, $3)',
            [newUser.username, newUser.password, newUser.timeout],
            (err, table) => {
                done();
                if(err) {
                    res.status(400).send(err);
                }
            });
            db.query('SELECT id FROM users WHERE username = $1',
            [newUser.username],
            (err, table) => {
                done();
                if(err) {
                    res.status(400).send(err);
                }
                res.status(200).send({
                    userId: table.rows[0].id
                })
            });
        }
    });
};

exports.editUser = (res, pool, editedUser) => {
    pool.connect((err, db, done) => {
        if(err) {
            res.status(400).send(err);
        }
        else {
            db.query('UPDATE users SET timeout = $2 WHERE id = $1',
            [editedUser.id, editedUser.timeout],
            (err, table) => {
                done();
                if(err) {
                    res.status(400).send(err);
                }
                res.status(200).send("User has been edited successfully.");
            });
        }
    });
};

exports.deleteUser = (res, pool, deletedUser) => {
    pool.connect((err, db, done) => {
        if(err) {
            res.status(400).send(err);
        }
        else {
            db.query('DELETE FROM users WHERE id = $1',
            [deletedUser.id],
            (err, table) => {
                done();
                if(err) {
                    res.status(400).send(err);
                }
                res.status(200).send("User has been deleted successfully.");
            });
        }
    });
};