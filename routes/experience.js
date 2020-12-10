const express = require('express'),
      router = express.Router(),
      experienceController = require('../controllers/experience-controller');

router.get('/experience', experienceController.get_all_experience);
router.get('/experience/:id', experienceController.get_one_experience);
    
module.exports = router;