const mongoose = require('mongoose')    

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided ']
    },
    price:{
        type:Number,
        required:[true,'product price must be provided ']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        // A field for the product's company. It's of type String and uses an enum validation, which means it must be one of the specified values ('ikea', 'liddy', 'caressa', 'marcos'). If a different value is provided, a validation error with the specified message will be triggered.
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{VALUE} is not supported'
        }
        // enum:['ikea','liddy','caressa','marcos']
    }
})

module.exports = mongoose.model('Product',productSchema);