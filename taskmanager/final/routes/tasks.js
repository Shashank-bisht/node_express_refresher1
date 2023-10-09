const express = require('express');

// creating the router object
const router = express.Router();

const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

// all logic related to tasks is defined in controllers(tasks.js)
// chaining get and post because they are sharing same path
router.route('/').get(getAllTasks).post(createTask)

// chaining get , patch and delete because they are sharing same path
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;
//By exporting the router, you can later import it in your main Express application file and mount it to a specific path or use it as part of your application's routing configuration.