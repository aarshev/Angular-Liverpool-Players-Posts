const jwt = require('./jwt');
const authCookieName = 'auth-cookie';
const Token  = require('../models/TokenBlackList');
const userModel = require('../models/User')
function auth(redirectUnauthenticated = true) {

    return function (req, res, next) {
        const token = req.cookies[authCookieName] || '';
            Promise.all([
            jwt.verifyToken(token),
            Token.findOne({ token })
        ])
            .then(([data, blacklistedToken]) => {
                if (blacklistedToken) {
                    return Promise.reject(new Error('blacklisted token'));
                }
                userModel.findById(data.id)
                    .then(user => {
                        req.user = user;
                        req.isLogged = true;
                        next();
                    })
            })
            .catch(err => {
                if (!redirectUnauthenticated) {
                    next();
                    return;
                }
                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    console.error(err);
                    res
                        .status(401)
                        .send({ message: "Invalid token!" });
                    return;
                }
                next(err);
            });
        
    }
}

module.exports = auth;
