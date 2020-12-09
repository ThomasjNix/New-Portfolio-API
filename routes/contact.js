const express = require('express'),
      router = express.Router(),
      contactController = require('../controllers/contact-controller');

router.post('/contact-form', contactController.form_submit);

    
module.exports = router;