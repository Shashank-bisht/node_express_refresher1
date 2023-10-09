const Task = require('../models/Task')

const getAllTasks = async (req, res) =>{
try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
} catch (error) {
    res.status(500).json({msg: error.message})
}
}

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
const updateTask = (req, res) =>{
    res.send("all items")
}
const deleteTask = (req, res) =>{
    res.send("all items")
}
const getTask = (req, res) =>{
    res.send("all items")
}


module.exports = {getAllTasks, createTask,deleteTask,getTask,updateTask}