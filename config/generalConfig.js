'use strict';
// Keep everything here as a secret ;)
module.exports = {
    databaseURI: 'mongodb://root:abc123@ds030719.mlab.com:30719/udemy-clone',
    port:  process.env.PORT || 8080,
    facebookSettings: {
        cliendId: '512919725577179',
        clientSecret: 'c951a03560d8715bc083aaa349d1761c',
        profileFields: ['emails', 'displayName'],
        cbURI:'http://localhost:8080/auth/facebook/cb'
    }
};