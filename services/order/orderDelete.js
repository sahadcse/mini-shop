const Order = require('../../models/order.model');

// delete Order by orderId
const orderDelete = async (orderId) => {
    try {
        const order = await Order.findById(orderId)
        if (!order) throw new Error('Order not found')

        await order.deleteOne();
        return order;
    }
    catch (error) {
        console.error('orderDelete:', error)
        throw new Error(error.message)
    }
}

module.exports = orderDelete;