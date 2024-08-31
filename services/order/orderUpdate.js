const Order = require('../../models/order.model');
const User = require('../../models/user.model');
const Product = require('../../models/product.model');

// update Order by orderId, status
const orderUpdate = async (orderId, status) => {
    try {
        const order = await Order.findById(orderId)
        if (!order) throw new Error('Order not found')

        order.status = status
        await order.save()

        return order;
    }
    catch (error) {
        console.error('orderUpdate:', error)
        throw new Error(error.message)
    }
}

module.exports = orderUpdate;