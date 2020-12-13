const express = require('express'),
      router = express.Router(),
      authController = require('../controllers/auth-controller');

router.post('/', authController.respond);

module.exports = router;