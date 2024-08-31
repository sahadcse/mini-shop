const category = require('../../models/category.model');

const categoryList = async () => {
    try {
        const categories = await category.find()
        return categories
    } catch (error) {
        console.error('categoryList:', error)
        throw new Error(error)
    }
}

module.exports = categoryList;