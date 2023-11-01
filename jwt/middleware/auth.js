const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors');

const authenticationMiddleware = async (req, res, next) =>{
    // storing authorization in authHeader
   const authHeader = req.headers.authorization;

   if(!authHeader || !authHeader.startsWith('Bearer ')){
      throw new UnauthenticatedError('no token provided')
   } 

 // getting token from header we are spiliting this because authorization header is in the form of 
 // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// Bearer and token is seperated by a space
   const token = authHeader.split(' ')[1]

   // verify token by using try catch
 try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
 //the req.user object is often used in web applications as a common practice to store information about the currently authenticated user for the duration of a request. It can be added to the req (request) object in a middleware function for easy access throughout the request-handling process.
    const {id, username} = decoded
    req.user = {id, username}
    next() 
    // using this next() because to transfer the control to new middleware which is dashboard see file in routes/main.js
  } catch (error) {
    throw new UnauthenticatedError("not authorized to access this route")
  }   
}

module.exports = authenticationMiddleware