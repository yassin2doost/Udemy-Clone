'use strict';
const
    mongoose = require('mongoose'),
    winston = require('winston'),
    generalConfig = require('../config/generalConfig'),
    chalk = require('chalk');


// Connecting Mongoose to data-base :)
mongoose.connect(generalConfig.databaseURI, {
    useCreateIndex: true,
    useNewUrlParser: true
}, err => {
   if (err) {
       console.log('Something goes wrong in connection to data-base: '+ err,  chalk.red('✗'));
   } else {
       console.log(chalk.blue('App has connected to the data-base', chalk.magentaBright('✓')));
   }
});
