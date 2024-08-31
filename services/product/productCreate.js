const Product = require('../../models/product.model');
const error = require('../../utils/error');
const imageUpload = require('../imageUpload')

const productCreate = async (name, description, sellingPrice, originalPrice, img, category, stock) => {
    try {
        console.log('Check from productCreate');
        const product = new Product({ name, description, sellingPrice, originalPrice, category, stock });
        if (img) {
            const imageUrl = await imageUpload(img);
            product.imageUrl = imageUrl
        }
        await product.save();
        return product;
    } catch (error) {
        console.error('Error from productCreate', error);
        throw error;
    }
};

module.exports = productCreate;