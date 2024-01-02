const express = require('express')
const app = express()
//In a Sequelize-based application, requiring the model files is typically enough to establish the database connection. When you require the model files, Sequelize automatically establishes a connection to the database using the configuration provided in those models.
require("./models")
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(8000,()=>{
    console.log("running")
})