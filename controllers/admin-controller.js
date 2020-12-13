const jwt = require('jsonwebtoken'),
      secret = require('../secret'),
      ExperienceModel = require('..//db/models/experience-model');

const experience_controller = {
    add_new_experience: (req, res, next) => {
        const newExperience = new ExperienceModel(req.body);
        newExperience.save((err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Database error occured on save');
            } else {
                return res.send(doc);
            }
        });
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
    },
    delete_experience: (req, res, next) => {
        const experienceID = req.params.id;
        if (experienceID) {
            ExperienceModel.findOneAndDelete({_id: experienceID}, (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(`Unable to remove experience record with ID ${experienceID}`);
                } else {
                    return res.send(doc);
                }
            });
        } else {
            return res.status(500).send(`Unable to locate experience with ID ${experienceID}`);
        }
    }
}

module.exports = experience_controller;