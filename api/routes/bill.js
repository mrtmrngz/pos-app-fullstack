const router = require('express').Router()
const {create_bill, get_bills} = require("../controllers/bill");
const {verifyToken} = require("../middlewares/verifyToken");

router.get('/', verifyToken, get_bills)

router.post('/', verifyToken, create_bill)

module.exports = router
