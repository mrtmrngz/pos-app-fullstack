const router = require('express').Router()
const {verifyToken} = require('../middlewares/verifyToken')

router.get('/', verifyToken, async (req, res) => {
    res.send("token verified")
})

module.exports = router