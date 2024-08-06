const express = require('express');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../services/categoryService');


const { getCategoryValidator, updateCategoryValidator, deleteCategoryValidator, createCategoryValidator } = require("../utils/validators/CategoriesValidators")
const router = express.Router();

router.route('/').get(getCategories).post(createCategoryValidator, createCategory);
router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

module.exports = router;