const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
// getting all the tasks
const getAllTasks = asyncWrapper (async (req, res) =>{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})

// using async wrapper because we don't want to repeate try and catch again and again

// creating tasks
const createTask = asyncWrapper( async (req, res) =>{ 
        // here Task is a model representing Task collection in database
    //.create is used to create and save new documents
  const task = await Task.create(req.body)
  res.status(201).json({task})
    
}
)

const updateTask = asyncWrapper( async (req, res) =>{
   
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            // it will return new tasks
            new: true,runValidators: true
        })

        if(!task){
            return res.status(404).json({msg: "Task not found"})
        }

        res.status(200).json({task})
    
})

// delete tasks
const deleteTask =asyncWrapper(async (req, res) =>{
  
        //naming id to taskID
        const {id:taskID} = req.params; 
        const task = await Task.findOneAndDelete({_id:taskID})
        // naming _id to taskID
        if(!task){
            return res.status(404).json({msg: "Task not found"})
        }
        res.status(200).json({task})
    
})

// get a single task
const getTask = asyncWrapper( async (req, res) =>{

    // destructuring id and naming it to taskID 
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg: "Task not found"})
    }
    res.status(200).json({task})

}
)


module.exports = {getAllTasks, createTask,deleteTask,getTask,updateTask}