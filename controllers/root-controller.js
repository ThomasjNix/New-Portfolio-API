const root_controller = {
    index_get: (req, res, next) => {
        console.log(req);
        res.render('dist/portfolio/index');
    },
    error_route: (req, res, next) => {
        console.log(req.url);
        res.render('index');
    }
}

module.exports.root_controller = root_controller;