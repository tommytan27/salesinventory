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
                        res.status(200).send("User is valid. Login was successfull.");
                    }
                    else {
                        res.status(401).send("User is invalid. Incorrect credentials.");
                    }
                }   
            });
        }
    });
};