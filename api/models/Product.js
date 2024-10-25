const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        color: {type: String},
        imageUrl: {type: String},
        price: {type: Number, required: true},
        categoryId: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true}
    }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product