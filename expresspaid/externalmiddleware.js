const logger = require('./logger')
// importing logger middleware
const express = require('express')
const app = express()
//using middleware name logger
// app.get('/', logger, (req, res) => {
//     res.send('this is home')
//   })
//   app.get('/about', logger, (req, res) => {
//     res.send('About')
//   })


// or if we donot want to write middlewares in every request we can use middleware as a global function using app.use
app.use(logger)



// or if we want to  use middleware on some particular request then
// app.use('/api',logger)
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