const mongoose = require("mongoose")


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "category is required"],
        unique: [true, "Category must be uinque"],
        minlength: [3, "Too short name"],
        maxlength: [32, 'Too long name']
    },
    slug: {
        type: String,
        lowercase: true
    },
    image: String

}, { timestamps: true })



const setImageURL = (doc) => {
    if (doc.image) {
        const imageUrl = `${process.env.BASE_URL}/categories/${doc.image}`
        doc.image = imageUrl
    }
}

categorySchema.post("init", (doc) => {
    setImageURL(doc)
})
categorySchema.post("save", (doc) => {
    setImageURL(doc)

})
const categoryModel = mongoose.model("Category", categorySchema)

module.exports = categoryModel