const router = require('express').Router()
const {get_products, get_product, add_product, update_product, delete_products} = require('../controllers/product')
const {verifyToken} = require("../middlewares/verifyToken");

router.get('/', get_products)
router.get('/:id', get_product)
router.post('/', verifyToken, add_product)
router.put('/:id', verifyToken, update_product)
router.delete('/:id', verifyToken, delete_products)

module.exports = router
