const express = require('express'),
      router = express.Router(),
      experienceController = require('../controllers/experience-controller');

router.get('/experience', experienceController.get_all_experience);
router.get('/projects', experienceController.get_all_projects);
    
module.exports = router;