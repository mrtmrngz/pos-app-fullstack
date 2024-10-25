const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const {email, password} = req.body

    try{
        const existingUser = await User.findOne({email})

        if(existingUser) return res.status(400).json({error: "Email Address is already registered"})

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await new User({
            email: email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json(newUser)

    }catch (err) {
        res.status(500).json({error: "Failed to create user!"})
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body

    try{

        const user = await User.findOne({email})

        if(!user) return res.status(404).json({error: "Invalid Credentials"})

        const comparePassword = await bcrypt.compare(password, user.password)

        if(!comparePassword) return res.status(404).json({error: "Invalid Credentials"})

        const age = 1000 * 60 * 60 * 24 * 7

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn: age}
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: age
        }).status(200).json({
            id: user._id,
            email: user.email
        })

    }catch (err) {
        res.status(500).json({error: "Failed to login!"})
    }
}

exports.logout = async (req, res) => {
    try{

        res.clearCookie('token').status(200).json({message: "Logout Successful"})

    }catch (err) {
        res.status(500).json({error: "Failed to logout!"})
    }
}