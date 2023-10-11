 
 // check username, password in post(login) request
 // if exist create new JWT
 // send back to front-end
 
 const jwt = require('jsonwebtoken');

 const CustomAPIError = require('../errors/custom-error')

 const login = async(req, res) => {
   const { username, password } = req.body

   if(!username || !password){
  throw new CustomAPIError('please provide a username and password',400)
   }
 const id = new Date().getDate()

   const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
   res.status(200).json({msg:'user created',token})
 }

 const dashboard = async(req, res) => {
   const authHeader = req.headers.authorization;

   if(!authHeader || !authHeader.startsWith('Bearer ')){
      throw new CustomAPIError('no token provided',401)
   } 
 // getting token from header
   const token = authHeader.split(' ')[1]
 try {
   const decoded = jwt.verify(token,process.env.JWT_SECRET)
   const luckyNumber = Math.floor(Math.random() *100)
    res.status(200).json({msg:`hello,${decoded.username}`,secret:` here is your no ,${luckyNumber}`})
 } catch (error) {
   throw new CustomAPIError("not authorized to access this route",401)
 }

    
 }

 module.exports ={
    login,dashboard
 }