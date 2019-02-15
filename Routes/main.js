'use strict';
const 
    router = require('express').Router(),
    mainController = require('../Controllers/mainController');


router.get('/', mainController.homepage);

module.exports = router;