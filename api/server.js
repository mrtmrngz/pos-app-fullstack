const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8000
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const routes = require('./routes/index')

//! Middewares

dotenv.config()
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(cookieParser())
app.use(logger('dev'))

//! Routes

app.use("/api", routes)

//! db

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection successfully")
    }catch (err) {
        console.log(err)
    }
}

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT} server`)
    connect()
})