const jwt = require('jsonwebtoken');
const User = require('../models/user.model');


const authenticateToken = (req, res, next) => {
    // console.log('authenticateToken:', req.body)
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401).json({ error: "Please Login First" });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403).json({ error: "Token Verification Failed" });
        req.user = user;
        next();
    });
};


module.exports = authenticateToken;