const router = require('express').Router()
const {get_categories, get_category, create_category, update_category, delete_category} = require('../controllers/category')
const {verifyToken} = require("../middlewares/verifyToken");

router.get('/', get_categories)

router.get('/:id', get_category)

router.post('/', verifyToken, create_category)

router.put('/:id', verifyToken, update_category)

router.delete('/:id', verifyToken, delete_category)

module.exports = router