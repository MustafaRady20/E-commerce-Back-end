const express = require("express")

const { createSubCategoryValidator,
    getSubcategoryValidator,
    deleteSubcategoryValidator,
    updatedSubcategoryValidator
} = require("../utils/validators/SubCategoryValidator")

const { createSubCategory,
    getSubCategories,
    getSubCategory,
    deletSubCategory,
    updateSubCategory,
    setCategoryIdToBody,
    setFilterObj } = require("../services/subCategoryServices")


const router = express.Router({ mergeParams: true })

router.route("/")
    .get(setFilterObj, getSubCategories)
    .post(setCategoryIdToBody, createSubCategoryValidator, createSubCategory)
router.route("/:id")
    .get(getSubcategoryValidator, getSubCategory)
    .delete(deleteSubcategoryValidator, deletSubCategory)
    .put(updatedSubcategoryValidator, updateSubCategory)


module.exports = router