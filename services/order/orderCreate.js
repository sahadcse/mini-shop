const Order = require('../../models/order.model');
const User = require('../../models/user.model');
const Product = require('../../models/product.model');

const orderCreate = async (email, products, totalAmount, shippingAddress, paymentType, paymentStatus, paymentId) => {
    const { productId, quantity, price } = products // products is an array of objects
    
    try {
        const user = await User.findOne({ email })
        if (!user) throw new Error('User not found')

        const order = new Order({
            userId: user.email,
            products: [{
                productId,
                quantity,
                price
            }],
            totalAmount,
            shippingAddress,
            paymentType,
            paymentStatus,
            paymentId
        })

        // input the order id into user collection
        user.orders.push(order._id)

        const productStock = await Product.findById(productId)
        if (!productStock) throw new Error('Product not found')
        productStock.stock = productStock.stock - quantity
        await productStock.save()

        await order.save()
        return order;
    }
    catch (error) {
        console.error('orderCreate:', error)
        throw new Error(error.message)
    }
}

module.exports = orderCreate;