const aysncHandler = require("express-async-handler")
const slug = require("slugify")
const ApiError = require("../utils/ApiError")

const SubCategory = require("../models/SubCategoryModel")


const createSubCategory = (aysncHandler(async (req, res, next) => {
    const { name, category } = req.body
    const subCategory = await SubCategory.create({ name, slug: slug(name), category })

    if (!subCategory) {
        return next(new ApiError("check connection to database", 400))
    }
    res.status(201).json({ data: subCategory })
}))

const getSubCategories = aysncHandler(async (req, res, next) => {
    const page = req.query.page * 1 || 1
    const limit = req.query.limit * 1 || 5
    const skip = (page - 1) * limit

    const subCategories = await SubCategory.find()
        .skip(skip)
        .limit(limit)
        .populate({ path: "category", select: "name -_id" })

    if (!subCategories) {
        return next(new ApiError("No SubCategories found ", 404))
    }

    res.status(200).json({ page: page, data: subCategories })
})

const getSubCategory = aysncHandler(async (req, res, next) => {
    const { id } = req.params

    const subCategory = await SubCategory.find({ _id: id }).populate({ path: "category", select: "name -_id" })
    if (!subCategory) {
        return next(new ApiError("no subcategory found", 404))
    }
    res.status(200).json({ data: subCategory })
})

const deletSubCategory = aysncHandler(async (req, res, next) => {
    const { id } = req.params
    const deletedSubCategory = await SubCategory.findOneAndDelete({ _id: id })

    if (!deletedSubCategory) {
        return next(new ApiError("not found", 404))
    }

    res.status(200).json("SubCategory successfuly deleted")
})

const updateSubCategory = aysncHandler(async (req, res, next) => {
    const { id } = req.params
    const { name, category } = req.body

    const updatedSubCategory = await SubCategory.findOneAndUpdate({ _id: id },
        { name, slug: slug(name), category }, { new: true })

    if (!updatedSubCategory) {
        return next(new ApiError("NO such category", 404))
    }
    res.status(200).json({ data: updatedSubCategory })
})
module.exports = {
    createSubCategory,
    getSubCategories,
    getSubCategory,
    deletSubCategory,
    updateSubCategory
}