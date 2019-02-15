'use strict';

const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const TokenSchema = new Schema({
    _userId : {
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 172800, //48 hours to expiration
        required:true,
    }
});
module.exports = mongoose.model('Token', TokenSchema);
