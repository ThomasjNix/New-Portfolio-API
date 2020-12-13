const jwt = require('jsonwebtoken'),
      secret = require('../secret');

const auth_controller = {
    respond: (req, res, next) => {
        if (req && req.headers && req.headers.authorization) {
            jwt.verify(req.headers.authorization, secret, (err, valid) => {
                if (err) {
                    res.status(403).send(false);
                } else {
                    res.status(200).send(true);
                }
            });
        } else {
            res.send('test');
        }
    }
}

module.exports = auth_controller;