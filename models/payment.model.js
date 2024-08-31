const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    orderId: {
        type: Schema.Types.ObjectId, 
        ref: 'Order'
    },
    paymentType: {
        type: String,
        required: true,
        enum: ['cod', 'card'],
        default: 'cod'
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    paymentId: {
        type: String
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;