const express = require('express'),
      router = express.Router(),
      adminController = require('../controllers/admin-controller'),
      jwt = require('jsonwebtoken');

router.post('/login', adminController.login);
router.post('/experience', adminController.add_new_experience);
router.delete('/experience/:id', adminController.delete_experience);
module.exports = router;