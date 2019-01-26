'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Creating Course Schema 
const CourseSchema = new Schema({

    title:{
    type:String, lowercase: true, required: [true,'The course title cannot be blank.'],
    trim: true,
    dropDups: true,
    index: true,
    },

    like: String,

    description: {
        type:String, lowercase: true, required: [true,'The course description cannot be blank.'],
        trim: true,
        dropDups: true,
        index: true,
        },
    price: Number,

    instructor: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: [true,'The course title cannot be blank.']
    },

    student : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    wistiaId: String,

}, {timestamps: true});

module.exports = mongoose.model('Course', CourseSchema);
