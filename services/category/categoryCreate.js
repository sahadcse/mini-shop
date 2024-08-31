const Category = require('../../models/category.model');

const categoryCreate = async (name, description) => {
    try {
        const category = new Category({ name, description })
        await category.save()
        return category
    } catch (error) {
        console.error('categoryCreate:', error)
        throw new Error(error)
    }
}

module.exports = categoryCreate;