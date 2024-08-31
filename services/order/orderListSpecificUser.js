const User = require('../../models/user.model');
const Order = require('../../models/order.model');

// get all Order by specific user email
const orderListSpecificUser = async (email) => {
    try {
        const user = await User.findOne({ email })
        if (!user) throw new Error('User not found')

        const order = await Order.find({ userId: user.email })
        return order;
    }
    catch (error) {
        console.error('orderListSpecificUser:', error)
        throw new Error(error.message)
    }
}

module.exports = orderListSpecificUser;