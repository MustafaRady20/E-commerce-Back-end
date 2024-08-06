const express = require("express")
const router = express.Router()

const { createSubCategoryValidator,
    getSubcategoryValidator,
    deleteSubcategoryValidator,
    updatedSubcategoryValidator
} = require("../utils/validators/SubCategoryValidator")

const { createSubCategory,
    getSubCategories,
    getSubCategory,
    deletSubCategory,
    updateSubCategory } = require("../services/subCategoryServices")

router.route("/")
    .get(getSubCategories)
    .post(createSubCategoryValidator, createSubCategory)
router.route("/:id")
    .get(getSubcategoryValidator, getSubCategory)
    .delete(deleteSubcategoryValidator, deletSubCategory)
    .put(updatedSubcategoryValidator, updateSubCategory)


module.exports = router