const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide a name"],
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:[true,"please provide a email"],
        //this regular expression is used to validate that a given string is in the format of a valid email address
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique: true,
    },
    password:{
        type:String,
        required:[true,"please provide a password"],
        minlength:6,
       
    },
})
// we are hashing the password here because model kai lia jo logic use karna hai vo model ke file mai he hona chiye 

UserSchema.pre('save', async function(next){
 const salt = await bcrypt.genSalt(10);
 // this is pointing to UserSchema
 this.password = await bcrypt.hash(this.password, salt);
 next() // pass control to next middleware
})

// making tokens for users

UserSchema.methods.createJWT = function(){
    return jwt.sign({userId:this._id,name:this.name},'jwtsecret',{
        expiresIn: '30d'
    })
}
module.exports = mongoose.model('User', UserSchema)

//Mongoose pre-save middleware is a feature of the Mongoose library for MongoDB and is used to execute functions or operations before a document is saved to the database.