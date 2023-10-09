const Task = require('../models/Task')

const getAllTasks = (req, res) =>{
    res.send("all items")
}

const createTask = async (req, res) =>{
  const task = await Task.create(req.body)
  res.status(201).json({task})
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