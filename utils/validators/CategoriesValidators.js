const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/Validation")

exports.getCategoryValidator = [
    check("id").isMongoId().withMessage("not valid id"),
    validatorMiddleware
]


exports.createCategoryValidator = [
    check("name").notEmpty().withMessage("can not be empty").isLength({ min: 3 })
        .withMessage("should be more than 3 char")
        .isLength({ max: 32 })
        .withMessage("too long name max length is 32"),
    validatorMiddleware
]

exports.updateCategoryValidator = [
    check("id").isMongoId().withMessage("not valid id"),
    validatorMiddleware
]
exports.deleteCategoryValidator = [
    check("id").isMongoId().withMessage("not valid id"),
    validatorMiddleware
]

