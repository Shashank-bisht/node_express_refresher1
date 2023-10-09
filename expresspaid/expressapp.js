const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public')) 

// app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname,'./navbar-app/index.html'));
// })

// if we add index.html to public folder then index.html will be always act as the root

app.get('/about', (req, res)=> {
    res.status(200).send("about page");
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>resourese not found</h1>");
})

app.listen(8080)