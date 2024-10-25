const router = require('express').Router()
const authRouter = require('./auth')
const categoryRouter = require('./category')
const productRouter = require('./product')
const billRouter = require('./bill')
const testRoutes = require('./test')


router.use("/auth", authRouter)
router.use("/categories", categoryRouter)
router.use("/products", productRouter)
router.use("/bills", billRouter)
router.use("/test", testRoutes)

module.exports = router
