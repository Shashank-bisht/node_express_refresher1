const express = require('express');
const router = express.Router();
const {
    getpeople,deletePerson,updateperson,createperson
} = require('../controllers/peoples');

// accessing function which is defined in controllers
router.get('/',getpeople)

// route for post request
router.post('/',createperson)

// route for put request put is used for update data
router.put('/:id',updateperson)


// here we are not actually deleting anything but we are not showing that data to the user which he want to delete
router.delete('/:id',deletePerson)

// or we can use below code for setting routes in short code

// chaining routes
// router.route('/').get(getpeople).post(createperson);

// router.route('/:id').put(updateperson).delete(deletePerson)


module.exports = router 
