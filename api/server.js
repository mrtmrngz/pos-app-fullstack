const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')

//! Middewares

app.use(express.json())
app.use(cors())


app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
})