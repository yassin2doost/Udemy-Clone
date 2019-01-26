'use strict';
const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');
    Schema = mongoose.Schema;


// Creating Student Schema 
const StudentSchema = new Schema({
    email:{ 
        type: String,
        lowercase: true, 
        required: [true, 'Your username cannot be blank.'],
        trim: true,
        unique: true,
        dropDups: true,
        index: true,
     },
    password: {
        type: String,
        required: [true, 'Your username cannot be blank.'],
        minlength: [5, 'Password must be at least 5 characters.'],
    },
    passwordResetToken: String,
    passwordResetExpires: Date,

    profile: {
        name: String,
        gender: String,
        location: String,
        website: String,
        picture: String
      },
},{timestamps: true });


// Hashing the Password with bcrypt to incease the security (pre is mongoose method)
StudentSchema.pre('save',function save(next) {
    const student = this;
    if (!user.isModified('password')) return next()
    bcrypt.genSalt(14, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, console.log('Hashing is under processing'), (err, salt) => {
            if(err) return next(err);
            student.password = hash;
            next();
        });
    });
});


// Compare the password with the database
StudentSchema.methods.comparePassword =  (studentPassword, done) => {
    bcrypt.compare(studentPassword, this.password, (err, isMatch) => {
      done(err, isMatch);
    });     
  };

// Choosing default picture for better UX :)
StudentSchema.methods.gravatar = function gravatar(size) {
    if (!size) size = 200;
    if(!this.email) return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    
    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
}

module.exports = mongoose.model('Student', StudentSchema);