const express = require('express'),
      router = express.Router(),
      adminController = require('../controllers/admin-controller');

router.post('/experience', adminController.add_new_experience);
    
module.exports = router;