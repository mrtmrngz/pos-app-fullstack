const router = require('express').Router()
const authRouter = require('./auth')
const testRoutes = require('./test')


router.use("/auth", authRouter)
router.use("/test", testRoutes)

module.exports = router
