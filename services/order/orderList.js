const Order = require('../../models/order.model');
const User = require('../../models/user.model');
const Product = require('../../models/product.model');

// get all Order
const orderList = async () => {
    try {
        const order = await Order.find()
        return order;
    }
    catch (error) {
        console.error('orderList:', error)
        throw new Error(error.message)
    }
}

module.exports = orderList;