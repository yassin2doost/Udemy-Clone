const
    mongoose = require('mongoose'),
    generalConfig = require('../config/generalConfig')


// Connecting Mongoose to data-base :)
mongoose.connect(generalConfig.databaseURI, {
    useCreateIndex: true,
    useNewUrlParser: true
}, err => {
   if (err) {
       console.log('Something goes wrong in connection to data-base: '+ err);
   } else {
       console.log('App has connected to the data-base :)');
   }
});

