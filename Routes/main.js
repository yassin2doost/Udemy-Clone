'use strict';
const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('mainPages/index.ejs');
    res.json('welcome,studen!');
});

module.exports = router;