const Category = require('../../models/category.model');

const categoryUpdate = async (id, name, description) => {
    try {
        const category = await Category.findByIdAndUpdate(id, { name, description }, { new: true })
        return category;
    }
    catch (error) {
        console.error('categoryUpdate:', error);
        throw new Error(error);
    }
}

module.exports = categoryUpdate;