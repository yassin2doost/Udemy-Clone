const 
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    generalConfig = require('../config/generalConfig'),
    winston = require('winston'),
    User = require('../Models/User');


        // Save user id to session
    passport.serializeUser((user, done) => {
        done(winston.error('serializeUser went wrong...'), user._id);
    });
        // retrevie data from session and mongoDB
    passport.deserializeUser((id,done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy(generalConfig.facebookSettings, (req, token, refreshToken, done) => {
        User.findOne({ facebook: prodile.id}, (err, user) => {
            if(err) return done(err);
            if(user) {
                return done(null, user);
            } else {
                const newUser = new User();
                newUser.email = profile._json.email;
                newUser.facebook = profile.id;
                newUser.token.push({kind: 'facebook', token});
                newUser.profile.name = profile.displayName;
                newUser.profile.picture = 'https://graph.facebook.com/' +  Profile.id + '/picture?type=large';

                newUser.save(err => {
                    return done(null, newUser);
                });
            }
        });
    }));