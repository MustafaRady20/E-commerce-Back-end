
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
const asyncHandler = require("express-async-handler")

const factory = require('./handlersFactory');
const Brand = require('../models/brandModel');




exports.uploadBrandImage = uploadSingleImage("image")

exports.resizeImage = asyncHandler(
    async (req, res, next) => {
        const fileName = `category-${uuidv4()}-${Date.now()}.jpeg`
        await sharp(req.file.buffer).resize(600, 600).toFormat("jpeg").jpeg({ quality: 90 }).toFile(`uploads/category/${fileName}`)
        req.body.image = fileName
        next()
    }

)
// @desc    Get list of brands
// @route   GET /api/v1/brands
// @access  Public
exports.getBrands = factory.getAll(Brand);

// @desc    Get specific brand by id
// @route   GET /api/v1/brands/:id
// @access  Public
exports.getBrand = factory.getOne(Brand);

// @desc    Create brand
// @route   POST  /api/v1/brands
// @access  Private
exports.createBrand = factory.createOne(Brand);

// @desc    Update specific brand
// @route   PUT /api/v1/brands/:id
// @access  Private
exports.updateBrand = factory.updateOne(Brand);

// @desc    Delete specific brand
// @route   DELETE /api/v1/brands/:id
// @access  Private
exports.deleteBrand = factory.deleteOne(Brand);