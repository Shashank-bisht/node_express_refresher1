require('dotenv').config()
//Express-Async-Errors library is an amazing way to catch errors at runtime without using try/catch blocks in your async functions.
require('express-async-errors')
// async error

const express = require('express');

const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware 
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store api</h1><a href="/api/v1/products">products</a>')
})

// routes comming from routes/products.js will mount with the below path
app.use('/api/v1/products',productsRouter )

app.use(notFoundMiddleware)
app.use(errorMiddleware)

//It checks if there's a PORT environment variable set (likely provided in the .env file) and defaults to port 8000 if it's not set.
const port = process.env.PORT || 8000


// since mongoose.connect return a promise so we are using async and await 
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("server listening"))
    } catch (error) {
        console.log(error)
    }
}

start()