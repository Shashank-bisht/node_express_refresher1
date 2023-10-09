const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[20,'name cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    },
});

//In Mongoose, a model is a constructor function that represents a specific collection in your MongoDB database. Models are created based on schemas and provide an interface for interacting with documents (data) within that collection
module.exports = mongoose.model('Task',TaskSchema);
// here Task is the name of the mongoose model