const Order = require('../../models/order.model');

// get a single Order
const orderSingle = async (orderId) => {
    try {
        const order = await Order.findById(orderId)
        if (!order) throw new Error('Order not found')

        return order;
    }
    catch (error) {
        console.error('orderSingle:', error)
        throw new Error(error.message)
    }
}

module.exports = orderSingle;