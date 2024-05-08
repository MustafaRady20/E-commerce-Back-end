const mongoose = require("mongoose")


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "category is required"],
        unique: [true, "Category must be uinque"],
        minlength: [3, "Too short name"],
        maxlength: [32, 'Too long name']
    },
    slug: {
        type: String,
        lowercase: true
    },
    image: String

}, { timestamps: true })


const categoryModel = mongoose.model("Category", categorySchema)

module.exports = categoryModel