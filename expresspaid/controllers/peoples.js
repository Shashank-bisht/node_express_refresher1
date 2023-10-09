const {people} = require('../data');

const getpeople = (req,res) => {
    res.status(200).json({people});
}

const createperson = (req,res) => {
    // distructuring name from req.body
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:"please provide name value"})
    }
    // showing people in response using array destructuring 
    res.status(200).json({success:true, data:[...people, name]});
}

const updateperson = (req,res) => {
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
}

const deletePerson = (req,res)=>{
    // for finding data that user want to delete
    const person = people.find((person)=>person.id === Number(req.params.id))
    // if not got anything then show error
    if(!person){
        return res.status(404).json({success: false, msg:`no person with id ${req.params.id}`})
    }     
    // show data that does not contain particular id which was provided by user to delete
    const newpeople = people.filter((person)=>person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data:newpeople})
}

module.exports = {
    getpeople,deletePerson,updateperson,createperson
}