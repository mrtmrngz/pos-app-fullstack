const mongoose = require('mongoose')
const Counter = require('./Counter')

const BillSchema = mongoose.Schema(
    {
        billNumber: {type: String, unique: true},
        paymentMethod: {type: String, required: true},
        cartItems: {type: Array, required: true},
        subTotal: {type: Number, required: true},
        tax: {type: Number, required: true},
        totalAmount: {type: Number, required: true},
        date: {type: Date, default: Date.now}
    },
)

BillSchema.pre('save', async function(next) {
    const bill = this

    if(!bill.isNew) return next()

    try {
        const counter = await Counter.findOneAndUpdate(
            {id: 'billNumber'},
            {$inc: {seq: 1}},
            {new: true, upsert: true}
        )

        bill.billNumber = `INV-${String(counter.seq).padStart(10, '0')}`
        next()

    }catch (err) {
        next(err)
    }
})

const Bill = mongoose.model('Bill', BillSchema)

module.exports = Bill
