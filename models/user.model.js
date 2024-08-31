const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minLength: [6, 'Password must be at least 6 characters long'],
        required: true
    },
    phone : {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{11}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    imageUrl: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    cart: {
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
