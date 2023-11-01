const User = require('../models/User');
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors');

const auth = (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError("Authentication invalid")
    }
    //f the Authorization header is present and correctly formatted, the code extracts the JWT from the header by splitting it at the space (' ') and taking the second part (the token).
    const token = authHeader.split(' ')[1]
    try {
        //The extracted token is then passed to the jwt.verify method to verify its authenticity. It uses a secret key (process.env.JWT_SECRET) to check whether the token has been tampered with and to decode the token's payload.
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // attach the user to the job routes
        req.user = {userId: payload.userId, name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError("Authentication Invalid")
    }
}

module.exports = auth