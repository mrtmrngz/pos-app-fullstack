const jwt = require('jsonwebtoken')

exports.verifyToken = async (req, res, next) => {
    const token = req.cookies.token

    try{
        if(!token) return res.status(401).json({message: "Not authenticate"})

        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
            if(err) return res.status(401).json({message: "Token is not valid"})

            req.userId = payload._id

            next()

        })
    }catch (err) {
        console.log(err)
    }
}