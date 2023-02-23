const router = require("express").Router()

const uploadImage = require('../controllers/uploadController')
const {getProducts,create} = require('../controllers/productController')

router.route('/').get(getProducts).post(create)
router.post('/upload',uploadImage)


module.exports = router