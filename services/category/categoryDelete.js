const Category = require('../../models/category.model');
const Product = require('../../models/product.model');

const categoryDelete = async (categoryId) => {
    try {
        // Find the category by ID
        const category = await Category.findById(categoryId);

        if (!category) {
            return 'Category not found';
        }

        // Find all products associated with the category
        const products = await Product.find({ category: category.name });

        // Delete all associated products
        await Product.deleteMany({ category: category.name });

        // Delete the category
        await category.deleteOne();

        return res.status(200).json({ message: 'Category and associated products deleted successfully' });
    } catch (error) {
        console.error('categoryDelete:', error);
        return error.message;
    }
};

module.exports = categoryDelete;