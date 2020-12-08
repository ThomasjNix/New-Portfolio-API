const express = require('express'),
      router = express.Router(),
      rootController = require('../controllers/root-controller').root_controller;

router.get('/', (req, res) => {
    console.log(req.url);
    res.render('index');
});
router.get('*', rootController.error_route);
    
module.exports = router;