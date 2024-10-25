const Bill = require('../models/Bill')


exports.get_bills = async (req, res) => {
    try {
        const bills = await Bill.find()

        res.status(200).json(bills)
    }catch (err) {
        res.status(500).json(err)
    }
}

exports.create_bill = async (req, res) => {

    const {paymentMethod, cartItems, subTotal, tax, totalAmount} = req.body

    try {
        const newBill = new Bill({
            paymentMethod,
            cartItems,
            subTotal,
            tax,
            totalAmount
        })

        await newBill.save()

        res.status(201).json(newBill)

    }catch (err) {
        res.status(500).json(err)
    }
}