const root_controller = {
    index_get: (req, res, next) => {
        res.render('index');
    }
}

module.exports = root_controller;