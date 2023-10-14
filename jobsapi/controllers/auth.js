const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res)=>{
    // User is coming from models and password is hashed before creating a new user
    const user = await User.create({...req.body})
   const token = user.createJWT()
    // creating shallow copy of the items in req.body
    res.json({user:{name:user.name},token})
}

const login = async (req, res)=>{
    res.send("login user")
}
module.exports = {
    register,login
}