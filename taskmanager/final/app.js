require('./db/connect')
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found')
//middleware
app.use(express.static('./public'))
app.use(express.json());
require('dotenv').config();
// importing routes 
const tasks = require('./routes/tasks');


// all routes defined in the "tasks" module will be prefixed with "/api/v1/tasks
app.use('/api/v1/tasks',tasks)
app.use(notFound);
// using app.use() to mount these routes under the "/api/v1/tasks" URL path

const port = 8080

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("Server listening on port"));
    } catch (error) {
        console.log(error)
    }
}

start()