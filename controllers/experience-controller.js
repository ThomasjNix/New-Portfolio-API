const experienceModel = require('../db/models/experience-model');

const experience_controller = {
    get_all_experience: (req, res, next) => {
        experienceModel.find().exec((err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Database error occured');
            } else {
                result.experienceID = res._id;
                res.json(result);
            }
        });
    },
    get_one_experience: (req, res, next) => {
        if (req && req.params && req.params.id) {
            experienceModel.findById(req.params.id).exec((err, result) => {
                if (err || !result) {
                    console.log(err);
                    return res.status(500).send('Database error occured');
                } else {
                    result.experienceID = res._id;
                    res.json(result);
                }
            });
        } else {
            console.log(err);
            return res.status(500).send('Failed to load - ID not found');
        }
    }
}

module.exports = experience_controller;