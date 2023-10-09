const Task = require('../models/Task')


// getting all the tasks
const getAllTasks = async (req, res) =>{
try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
} catch (error) {
    res.status(500).json({msg: error.message})
}
}

// creating tasks
const createTask = async (req, res) =>{ 
    try {
        // here Task is a model representing Task collection in database
    //.create is used to create and save new documents
  const task = await Task.create(req.body)
  res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
    
}


const updateTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            // it will return new tasks
            new: true,runValidators: true
        })

        if(!task){
            return res.status(404).json({msg: "Task not found"})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// delete tasks
const deleteTask =async (req, res) =>{
    try {
        //naming id to taskID
        const {id:taskID} = req.params; 
        const task = await Task.findOneAndDelete({_id:taskID})
        // naming _id to taskID
        if(!task){
            return res.status(404).json({msg: "Task not found"})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// get a single task
const getTask = async (req, res) =>{
try {
    // destructuring id and naming it to taskID 
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg: "Task not found"})
    }
    res.status(200).json({task})
} catch (error) {
    // for syntax errors
    res.status(500).json({msg:error})
}
}



module.exports = {getAllTasks, createTask,deleteTask,getTask,updateTask}