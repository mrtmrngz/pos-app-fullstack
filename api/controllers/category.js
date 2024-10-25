const Category = require('../models/Category')


exports.get_categories = async (req, res) => {
    try {
        const categories = await Category.find()

        res.status(200).json(categories)

    }catch (err) {
        res.status(500).json({error: "Error fetching categories"})
    }
}

exports.get_category = async (req, res) => {

    const id = req.params.id

    try {
        const category = await Category.findById(id)

        if(!category) return res.status(404).json({error: "Category not found"})

        res.status(200).json(category)

    }catch (err) {
        res.status(500).json({error: "Error fetching category"})
    }
}

exports.create_category = async (req, res) => {

    const {title, color, imageUrl} = req.body

    try {
        const newCategory = new Category({title, color, imageUrl})

        await newCategory.save()

        res.status(201).json(newCategory)

    }catch (err) {
        res.status(500).json({error: "Error creating category"})
    }
}

exports.update_category = async (req, res) => {

    const {title, color, imageUrl} = req.body

    try {
        const category = await Category.findById(req.params.id)

        if(!category) return res.status(404).json({error: "Category not found"})

        category.title = title
        category.color = color
        category.imageUrl = imageUrl

        await category.save()

        res.status(200).json({category, message: "Category updated successfully"})

    }catch (err) {
        res.status(500).json({error: "Error update category"})
    }
}

exports.delete_category = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)

        if(!category) return res.status(404).json({error: "Category not found"})

        res.status(200).json({category, message: "Category deleted successfully"})

    }catch (err) {
        res.status(500).json({error: "Error deleting category"})
    }
}