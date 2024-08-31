const orderCreate = require('../services/order/orderCreate')
const orderList = require('../services/order/orderList')
const orderUpdate = require('../services/order/orderUpdate')
const orderDelete = require('../services/order/orderDelete')
const orderSingle = require('../services/order/orderSingle')
const orderListSpecificUser = require('../services/order/orderListSpecificUser')

// create an order
const orderCreateController = async (req, res) => {
    const { email, products, totalAmount, shippingAddress, paymentType, paymentStatus, paymentId } = req.body

    try {
        const order = await orderCreate(email, products, totalAmount, shippingAddress, paymentType, paymentStatus, paymentId)
        res.status(201).json(order)
    } catch (error) {
        console.error('orderCreateController:', error)
        res.status(500).json({ message: error.message })
    }
}

// get all orders
const orderListController = async (req, res) => {
    try {
        const orders = await orderList()
        res.status(200).json(orders)
    } catch (error) {
        console.error('orderListController:', error)
        res.status(500).json({ message: error.message })
    }
}

// get all orders for a specific user
const orderListUserController = async (req, res) => {
    const { email } = req.params

    try {
        const orders = await orderListSpecificUser(email)
        res.status(200).json(orders)
    } catch (error) {
        console.error('orderListUserController:', error)
        res.status(500).json({ message: error.message })
    }
}

// get a specfic order
const orderSingleController = async (req, res) => {
    const { orderId } = req.params

    try {
        const order = await orderSingle(orderId)
        res.status(200).json(order)
    } catch (error) {
        console.error('orderSingleController:', error)
        res.status(500).json({ message: error.message })
    }
}

const orderUpdateController = async (req, res) => {
    const { orderId, status } = req.body

    try {
        const order = await orderUpdate(orderId, status)
        res.status(200).json(order)
    } catch (error) {
        console.error('orderUpdateController:', error)
        res.status(500).json({ message: error.message })
    }
}

const orderDeleteController = async (req, res) => {
    const { orderId } = req.body

    try {
        const order = await orderDelete(orderId)
        res.status(200).json(order)
    } catch (error) {
        console.error('orderDeleteController:', error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    orderCreateController,
    orderListController,
    orderListUserController,
    orderSingleController,
    orderUpdateController,
    orderDeleteController
}