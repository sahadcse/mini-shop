const category = require('../../models/category.model');

const categoryGet = async (id) => {
    try {
        const category = await category.findById(id)
        return category
    } catch (error) {
        console.error('categoryGet:', error)
        throw new Error(error)
    }
}

module.exports = categoryGet;