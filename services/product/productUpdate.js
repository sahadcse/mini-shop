const Product = require('../../models/product.model');
const error = require('../../utils/error');
const imageUpload = require('../imageUpload')

const productUpdate = async (id, name, description, sellingPrice, originalPrice, img, category, stock) => {
    try {
        console.log('Check from productUpdate');
        const product = await Product.findById(id);
        if (!product) {
            throw error(404, 'Product not found');
        }
        name && (product.name = name);
        description && (product.description = description);
        sellingPrice && (product.sellingPrice = sellingPrice);
        originalPrice && (product.originalPrice = originalPrice);
        category && (product.category = category);
        stock && (product.stock = stock);
        if (img) {
            const imageUrl = await imageUpload(img);
            product.imageUrl = imageUrl
        }
        await product.save();
        return product;
    }
    catch (error) {
        console.error('Error from productUpdate', error);
        throw error;
    }
}

module.exports = productUpdate;