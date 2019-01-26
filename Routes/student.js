'use strict';
const
    router = require('express').Router(),
    user = require('../Models/User');

router.get('/signup', (rea, res, next) => {
  
});

// router.post('/signup', (req, res, next) => {
//     let user = new User();
    
//   email: req.body.email,
//   password: req.body.password,
//   profile.name: req.body.name,
// });

module.exports = router;