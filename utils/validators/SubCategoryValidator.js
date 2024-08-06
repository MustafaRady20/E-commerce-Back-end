const { check } = require("express-validator")
const validatorMiddleware = require("../../middleware/Validation")



exports.createSubCategoryValidator = [
    check("name").notEmpty().withMessage("name can not be empty").isLength({ min: 2 })
        .withMessage("Too short name must be more than 2 char ").isLength({ max: 32 })
        .withMessage("too long name must be less than 32"),
    check("category").isMongoId().withMessage("Not valid monogo id"),
    validatorMiddleware
]

exports.getSubcategoryValidator = [
    check("id").notEmpty().isMongoId().withMessage("id is not valid"),
    validatorMiddleware
]
exports.deleteSubcategoryValidator = [
    check("id").notEmpty().isMongoId().withMessage("id is not valid"),
    validatorMiddleware
]
exports.updatedSubcategoryValidator = [
    check("id").notEmpty().isMongoId().withMessage("id is not valid"),
    check("name").notEmpty().withMessage("name can not be empty").isLength({ min: 2 })
        .withMessage("Too short name must be more than 2 char ").isLength({ max: 32 })
        .withMessage("too long name must be less than 32"),
    check("category").isMongoId().withMessage("Not valid monogo id"),
    validatorMiddleware
]