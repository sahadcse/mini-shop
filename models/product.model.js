const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productId = require('../utils/productIdGenerator');

const productSchema = new Schema({
    productId: {
        type: Number,
        required: true,
        unique: true,
        default: productId
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    ratings: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            required: true
        }
    }],
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;