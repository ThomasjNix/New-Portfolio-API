const jwt = require('jsonwebtoken'),
      secret = require('../secret');

const experience_controller = {
    add_new_experience: (req, res, next) => {
        res.send('TODO');
    },
    login: (req, res, next) => {
        
        const body = req.body;

        // Hard code login for testing, TODO: Implement secure DB referenced login
        const user = [{username: 'test', password: 'test'}].find(user => user.username == body.username);
        if (!user || body.password != 'test') {
            return res.sendStatus(401);
        }

        jwt.sign({userID: user.id}, secret, {expiresIn: '4h', algorithm: 'HS256'}, function(err, token) {
            res.send(JSON.stringify({token}));
        });
    }
}

module.exports = experience_controller;