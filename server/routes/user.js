const User = require('../models/user')

module.exports = (router, passport) => {
    router.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

    router.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
        res.redirect('/');
    });

    router.get('/user/me' , async(req, res) => {
        if (!req.session.passport) return res.json(null)

        const user = await User.findById(req.session.passport.user)
        return res.json(user)
    })
}