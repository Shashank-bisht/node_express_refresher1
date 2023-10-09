const express = require('express');
const app = express();
let {people} = require('./data');
//// Middleware to parse JSON request bodies
app.use(express.json());
app.get('/api/people',(req,res) => {
    res.status(200).json({people});
})

// route for post request
app.post('/api/people',(req,res) => {
    // distructuring name from req.body
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:"please provide name value"})
    }
    // showing people in response using array destructuring 
    res.status(200).json({success:true, data:[...people, name]});
})

// route for put request put is used for update data
app.put('/api/people/:id',(req,res) => {
    // getting id from paramaters
const {id} = req.params;
// getting name from body to update that
const {name} = req.body;
// finding people id that matches with id provided in the paramater and if we not get that id we will return error
const person = people.find((person)=>person.id === Number(id))
if(!person){
    return res.status(400).json({success:false,msg:"please provide id value"})
}
// getting the array of person and changing their name of selected id

const newpeople = people.map((person)=>{
    if(person.id === Number(id)){
        person.name = name
        // if we return person here then we will get only selected person
    } 
    return person;
    // console.log(person)
   
})
res.status(200).json({success:true,msg:newpeople})
})


// here we are not actually deleting anything but we are not showing that data to the user which he want to delete
app.delete('/api/people/:id',(req,res)=>{
    // for finding data that user want to delete
    const person = people.find((person)=>person.id === Number(req.params.id))
    // if not got anything then show error
    if(!person){
        return res.status(404).json({success: false, msg:`no person with id ${req.params.id}`})
    }     
    // show data that does not contain particular id which was provided by user to delete
    const newpeople = people.filter((person)=>person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data:newpeople})
})
app.listen(8080,()=>{
    console.log("server listening on 8080")
})