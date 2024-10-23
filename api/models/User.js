const mongoose = require('mongoose')


const UserSchema = mongoose.Schema(
    {
        email: {
            type: String, required: true
        },
        password: {
            type: String, require: true
        }
    },
    {timestamps: true}
)

const User = mongoose.model('User', UserSchema)

module.exports = User