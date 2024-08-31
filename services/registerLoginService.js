const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const error = require('../utils/error');
const { findByEmail, createUser, updateUser, deleteUser } = require('./findCreateUpdateUser');

const registerService = async (name, email, password, phone, img) => {
    const user = await findByEmail(email);
    if (user) {
        throw error('User already exists', 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await createUser(name, email, hashedPassword, phone, img);
}

const loginService = async (email, password) => {
    const user = await findByEmail(email);
    if (!user) {
        throw error('User not found', 404);
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw error('Invalid credentials', 400);
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '5h' });
    return { token };
}

const updateService = async (email, name, phone, password) => {
    return await updateUser(email, name, phone, password);
}

const deleteService = async (email) => {
    return await deleteUser(email);
}

module.exports = { registerService, loginService, updateService, deleteService };