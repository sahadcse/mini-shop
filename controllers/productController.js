const productCreate = require('../services/product/productCreate');
const productGet = require('../services/product/productGet');
const productUpdate = require('../services/product/productUpdate');
const productDelete = require('../services/product/productDelete');

const productCreateController = async (req, res, next) => {
    const { name, description, sellingPrice, originalPrice, category, stock } = req.body;

    const img = req.file;
    console.log('Cheeck from productCreateController');

    if (!name || !description || !sellingPrice || !category || !stock) {
        const error = new Error('All fields are required');
        error.status = 400;
        return next(error);
    }
    
    try {
        const result = await productCreate(name, description, sellingPrice, originalPrice, img, category, stock);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error from productCreateController', error);
        next(error);
    }
};

const productGetController = async (req, res, next) => {
    try {
        const result = await productGet();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error from productGetController', error);
        next(error);
    }
};

const productUpdateController = async (req, res, next) => {
    const { id } = req.params;
    const { name, description, sellingPrice, originalPrice, category, stock } = req.body;
    const img = req.file;

    if (!id) {
        const error = new Error('Product ID is required');
        error.status = 400;
        return next(error);
    }

    try {
        const result = await productUpdate(id, name, description, sellingPrice, originalPrice, img, category, stock);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error from productUpdateController', error);
        next(error);
    }
};

const productDeleteController = async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        const error = new Error('Product ID is required');
        error.status = 400;
        return next(error);
    }

    try {
        const result = await productDelete(id);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error from productDeleteController', error);
        next(error);
    }
};

module.exports = {
    productCreateController,
    productGetController,
    productUpdateController,
    productDeleteController
};
