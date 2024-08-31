const User = require('../models/user.model');
const error = require('../utils/error');
const bcrypt = require('bcrypt');
const imageUpload = require('./imageUpload');
const imageDelete = require('./imageDelete');

/// Multer and Cloudinary configuratio

const findByEmail = async (email) => {
    return await User.findOne({ email });
}

const createUser = async (name, email, password, phone, img) => {
    try {
        const user = new User({ name, email, password, phone});
        if (img) {
            const imgUPLD = await imageUpload(img);
            user.imageUrl = imgUPLD;
        }
        await user.save();
        return user;
    } catch (error) {
        console.error("Error in createUser", error);
        throw error('User creation failed', 500);
    }
    
}

const updateUser = async (email, name, phone, password) => {
    const user = await findByEmail(email);
    if (!user) {
        throw error('User not found', 404);
    }
    user.name = name;
    user.phone = phone;
    if (password) {
        user.password = await bcrypt.hash(password, 10);
    }
    return await user.save();
}

const deleteUser = async (email) => {
    const user = await findByEmail(email);
    if (!user) {
        throw error('User not found', 404);
    }
    if (user.imageUrl) {
        await imageDelete(user.imageUrl);
    }
    return await user.deleteOne().json({ message: "User deleted successfully" });
}


module.exports = { findByEmail, createUser, updateUser, deleteUser };