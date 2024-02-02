const express = require("express")
const {getCategories} = require("../services/categoryServices")

const router = express.Router()

router.get("/categories", getCategories);


module.exports = router