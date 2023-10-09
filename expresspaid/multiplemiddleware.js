// importing two middleware name logger and authorize

const logger = require('./logger')
const authorize = require('./authorize')

const express = require('express')
const app = express()

// here using middleware order matters 
//using two middleware 
// app.use([authorize,logger])
app.use([logger,authorize])
// app.use is used for adding middleware

app.get('/',  (req, res) => {
    res.send('this is home')
  })

  app.get('/api/about', (req, res) => {
    res.send('products')
  })
  app.get('/about', (req, res) => {
    res.send('this is About')
  })
  
  app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
  })