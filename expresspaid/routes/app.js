// i have done this because mai app.js mai rayta nahi failna chahta tha so i defined all routes in people.js and work of routes in controllers


const express = require('express');
const app = express();
const people = require('./people')
app.use(express.json());
// because api/people is base route and we don't have to write it again and again in people.js
app.use('/api/people',people)

app.listen(8080,()=>{
    console.log("server listening on 8080")
})