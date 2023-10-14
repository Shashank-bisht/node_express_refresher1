const Product = require('../models/Product');

const {StatusCodes} = require('http-status-codes');

const createProduct = async (req, res) => {
    console.log(req.body)
    //This line creates a new product in a MongoDB database using Mongoose. It uses the Product model to interact with the database. The await keyword is used because the Product.create method likely returns a promise, and you want to wait for the product creation to complete before moving on.
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({product})
    //The .json({product}) part of the code means that you're sending a JSON response to the client, and the JSON object in the response contains a property named "product" whose value is the product variable.
}

const getAllProducts = async (req, res) => {
   const products = await Product.find({})
   res.status(StatusCodes.OK).json({products});
}

module.exports = {
    createProduct, getAllProducts
}