const express = require('express');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  uploadCategoryImage,
  resizeImage
} = require('../services/categoryService');

const subCategoriesRoute = require("./subCategoryRoutes")
const { getCategoryValidator, updateCategoryValidator, deleteCategoryValidator, createCategoryValidator } = require("../utils/validators/CategoriesValidators")

const router = express.Router();

router.use("/:categoryId/subCategories", subCategoriesRoute)

router.route('/').get(getCategories).post(resizeImage, uploadCategoryImage, createCategoryValidator, createCategory);
router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(resizeImage, uploadCategoryImage, updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

module.exports = router;