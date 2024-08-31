const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product.model');

const generalInformationSchema = new Schema({
    telNo: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    singleAdvertisement: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    socalLinks: [
        {
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    ],
    aboutUs: {
        type: String,
        required: true
    },
    dealsOfMonth: {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        discount: {
            type: Number,
            required: true
        },
        timeLimit: {
            type: Date,
            required: true
        }
    }
})

const GeneralInformation = mongoose.model('GeneralInformation', generalInformationSchema);

module.exports = GeneralInformation;