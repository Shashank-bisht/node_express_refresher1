const express = require('express')
const router = express.Router()

const {createProduct, getAllProducts} = require('../controllers/productController')

router.route('/').post(createProduct).get(getAllProducts)


const {uploadProductImage} = require('../controllers/uploadController')


router.route('/uploads').post(uploadProductImage)

module.exports = router