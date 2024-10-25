const mongoose = require('mongoose')

const CounterSchema = mongoose.Schema(
    {
        id: {type: String, required: true},
        seq: {type: Number, default: 1}
    }
)

const Counter = mongoose.model('Counter', CounterSchema)

module.exports = Counter