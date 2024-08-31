const Product = require('../../models/product.model');
const error = require('../../utils/error');

const productGet = async () => {
    try {
        console.log('Check from productGet');
        const productAll = await Product.find();
        if (!productAll) {
            throw error(404, 'Product not found');
        }
        return productAll;
    }
    catch (error) {
        console.error('Error from productGet', error);
        throw error;
    }
}

module.exports = productGet;