const express = require('express'),
      router = express.Router(),
      experienceController = require('../controllers/experience-controller');

router.get('/', experienceController.get_all_experience);
router.get('/:id', experienceController.get_one_experience);
    
module.exports = router;