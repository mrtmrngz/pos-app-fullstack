const Product = require('../models/Product')

exports.get_products = async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch (err) {
        res.status(500).json({error: "Error fetching products"})
    }
}

exports.get_product = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)

        if(!product) return res.status(404).json({error: "Product not found"})

        res.status(200).json(product)
    }catch (err) {
        res.status(500).json({error: "Error fetching product"})
    }
}

exports.add_product = async (req, res) => {

    const {title, color, imageUrl, price, categoryId} = req.body

    try{
        const newProduct = new Product({title, color, imageUrl, price, categoryId})

        await newProduct.save()

        res.status(201).json(newProduct)

    }catch (err) {
        res.status(500).json({error: "Error add products"})
    }
}

exports.update_product = async (req, res) => {

    const {title, color, imageUrl, price, categoryId} = req.body

    try{
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({error: "Product not found"})

        product.title = title
        product.color = color
        product.imageUrl = imageUrl
        product.price = price
        product.categoryId = categoryId

        await product.save()

        res.status(200).json(product)

    }catch (err) {
        res.status(500).json({error: "Error update products"})
    }
}

exports.delete_products = async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id)

        if(!product) return res.status(404).json({error: "Product not found"})

        res.status(200).json({product, message: "Product deleted successfully"})
    }catch (err) {
        res.status(500).json({error: "Error delete products"})
    }
}