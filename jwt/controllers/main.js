 
 // check username, password in post(login) request
 // if exist create new JWT
 // send back to front-end
 
 const jwt = require('jsonwebtoken');

 const {BadRequestError} = require('../errors')

 const login = async(req, res) => { // extracting username and password from req.body
   const { username, password } = req.body
  
   if(!username || !password){
  throw new BadRequestError('please provide a username and password')
   }
   //just for demo normally id is provided by db
 const id = new Date().getDate()
//This is a function provided by jwt library for creating JWTs. It takes three arguments: the payload, a secret key, and options.
   const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
   //sending message and token to front-end(client)
   res.status(200).json({msg:'user created',token})
 }

 
 const dashboard = async(req, res) => {
  console.log(req.user)
  // if jwt is available show this data
  const luckyNumber = Math.floor(Math.random() *100)
  res.status(200).json({msg:`hello,${req.user.username}`,secret:` here is your no ,${luckyNumber}`})
   // req.user is comming from auth.js

 }

 module.exports ={
    login,dashboard
 }