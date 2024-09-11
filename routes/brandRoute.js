const express = require('express');
const {
    getBrandValidator,
    createBrandValidator,
    updateBrandValidator,
    deleteBrandValidator,
} = require('../utils/validators/brandValidator');

const {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
    uploadBrandImage,
    resizeImage
} = require('../services/brandServices');

const router = express.Router();

router.route('/').get(getBrands).post(resizeImage, uploadBrandImage, createBrandValidator, createBrand);
router
    .route('/:id')
    .get(getBrandValidator, getBrand)
    .put(resizeImage, uploadBrandImage, updateBrandValidator, updateBrand)
    .delete(deleteBrandValidator, deleteBrand);

module.exports = router;