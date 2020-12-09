const express = require('express'),
      router = express.Router(),
      rootController = require('../controllers/root-controller');

router.get('*', rootController.index_get);
    
module.exports = router;