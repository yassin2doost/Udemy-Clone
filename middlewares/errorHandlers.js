'use strict';
const 
    winston = require('winston');

    // Error Handler wrapp any route...
exports.catchErrors = (handler) => {
    winston.log('verboose', err.message, err);
    return  async (req, res, cb) => {
        try{
            await handler(req, res);
        } catch(ex) {
            cb(ex);
        }
    };
};

    // 404 Error handler
exports.notFound = async (req, res, cb) => {
    const err = new Error('Not Found!');
    err.status = 404;
    res.render('/partials/404');
    cb(err); 
};


exports.flashValidatonerros = async(err, res, res, cb) => {
    if(!err.errors) return cb(err);
    const errorKeys = Object.keys(err.errors);
    errorKeys.forEach(key => req.flash('error',
    err.errors[key].message));
    res.redirect('back');
}

exports.develipmentErrors = async(err,req, res, cb) => {
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status,
        stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    };
    res.status(err.status || 500);
    res.format({
        'text/html': () => {
          res.render('error', errorDetails);
        }, 
        'application/json': () => res.json(errorDetails)
      });
};


exports.productionErrors = async(err, req, res, cb) => {
    winston.log('verboose', err.message, err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};

