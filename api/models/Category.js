const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        color: {type: String},
        imageUrl: {type: String}
    }
)

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category