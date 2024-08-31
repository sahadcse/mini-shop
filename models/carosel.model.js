const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caroselSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: true
    },
    imageTitle: {
        type: String,
        required: true
    },
    imageText: {
        type: String,
        required: true
    },
    imageTag: {
        type: String,
        required: true
    },
    imageBtnLink: {
        type: String,
        required: true
    }
});

const Carosel = mongoose.model('Carosel', caroselSchema);

module.exports = Carosel;