const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/user')

module.exports = (passport) => {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
    });

    // Use the GoogleStrategy within Passport.
    //   Strategies in Passport require a `verify` function, which accept
    //   credentials (in this case, an accessToken, refreshToken, and Google
    //   profile), and invoke a callback with a user object.
    passport.use(new GoogleStrategy({
        clientID: '839417881030-ql5ut5ockrfphu4tq06ulotke4i1bkt3.apps.googleusercontent.com',
        clientSecret: 'mYF5So-t_KKav_12yOVHGVst',
        callbackURL: "http://localhost/api/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ 
            googleId: profile.id,
            name : profile.name.givenName,
            email : profile.emails[0].value,
            profile: profile
        }, function (err, user) {
            return done(err, user);
       });
    }));
}
