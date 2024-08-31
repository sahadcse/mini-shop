const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const connectDB = require('./config/connection');
const router = require('./routes');


const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});



app.get('/', (req, res) => {
    res.send('This is the Server Home Page of the MiniShop');
});

// Global error handler
app.use((err, _req, res, _next) => {
    res.status(500).json({
        error: err.message
    });
});



