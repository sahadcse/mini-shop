const Product = require('../../models/product.model');
const error = require('../../utils/error');
const imageDelete = require('../imageDelete')

const productDelete = async (id) => {
    try {
        console.log('Check from productDelete');
        const product = await Product.findById(id);
        if (!product) {
            throw error(404, 'Product not found');
        }
        await imageDelete(product.imageUrl);
        await product.deleteOne();
        return product;
    }
    catch (error) {
        console.error('Error from productDelete', error);
        throw error;
    }
}

module.exports = productDelete;