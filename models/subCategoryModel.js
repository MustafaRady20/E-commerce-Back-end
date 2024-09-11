const mongoose = require("mongoose")


const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: [2, "Too short name"],
        maxlength: [32, "Too Long name"],
        unique: [true, "subCategory name already exists it must be unique"]
    },
    slug: {
        type: String,
        lowercase: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: [true, "SubCategory must belong to a main category"]
    }

}, { timestamps: true })



module.exports = mongoose.model("SubCategory", SubCategorySchema)