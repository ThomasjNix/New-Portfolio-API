const experience_controller = {
    get_all_experience: (req, res, next) => {
        console.log(req);
        res.send('test');
    },
    get_all_projects: (req, res, next) => {
        console.log(req);
        res.send('test');
    }
}

module.exports = experience_controller;