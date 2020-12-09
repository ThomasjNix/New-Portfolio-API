const contact_controller = {
    form_submit: (req, res, next) => {
        res.json(req.body);
    }
}

module.exports = contact_controller;