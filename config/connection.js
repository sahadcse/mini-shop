const mongoose = require('mongoose');

// Connect to MongoDB
function connectDB () {
    mongoose.connect(process.env.ATLAS_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.log(err));
}

module.exports = connectDB;