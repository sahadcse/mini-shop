const {registerService, loginService, updateService, deleteService} = require('../services/registerLoginService');


const registerController = async (req, res, next) => {
    const { name, email, password, phone } = req.body;
    const img = req.file;
    if (!name || !email || !password || !phone) {
        return next(new Error('All fields are required'));
    }
    try {
        const user = await registerService(name, email, password, phone, img);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new Error('All fields are required'));
    }
    try {
        const token = await loginService(email, password);
        res.status(200).json(token);
    } catch (error) {
        next(error);
    }
}

const updateController = async (req, res, next) => {
    const { name, phone, password } = req.body;
    const email = req.user.email;
    if (!name || !phone || !password) {
        return next(new Error('All fields are required'));
    }
    try {
        const user = await updateService(email, name, phone, password);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const deleteController = async (req, res, next) => {
    const email = req.user.email;
    try {
        const user = await deleteService(email);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = { registerController, loginController, updateController, deleteController };