const {
    createAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin,
    allAdmins
} = require('../services/admin/createUpdateDeleteFind');
const emailValidation = require('../validation/admin.validation');
const { findAdminByEmail, findAdminById } = require('../services/admin/findAdmin');


const adminCreateController = async (req, res, next) => {
    const {
        name,
        email,
        password,
        roles
    } = req.body;
    const img = req.file;
    if (!name || !email || !password || !roles) {
        return next(new Error('All fields are required'));
    }
    if (!emailValidation(email)) {
        return next(new Error('Email is not valid'));
    }
    const admin = await findAdminByEmail(email);
    if (admin) {
        return res.status(400).json({
            error: 'Admin already exists'
        });
    }
    try {
        const admin = await createAdmin(name, email, password, roles, img);
        res.status(201).json(admin);
    } catch (error) {
        console.error("Error in adminCreateController", error);
        next(error);
    }
}

const adminLoginController = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    if (!email || !password) {
        return next(new Error('All fields are required'));
    }
    const admin = await findAdminByEmail(email);
    if (!admin) {
        return res.status(404).json({
            error: 'Admin not found'
        });
    }
    try {
        const admin = await loginAdmin(email, password);
        res.status(200).json(admin);
    } catch (error) {
        console.error("Error in adminLoginController", error);
        next(error);
    }
}

const adminUpdateController = async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        name,
        email,
        password,
        roles
    } = req.body;
    const img = req.file;
    if (!name && !email && !password) {
        return next(new Error('All fields are required'));
    }
    if (email && !emailValidation(email)) {
        return next(new Error('Email is not valid'));
    }
    const admin = await findAdminById(id);
    if (!admin) {
        return res.status(404).json({
            error: 'Admin not found'
        });
    }
    try {
        const admin = await updateAdmin(id, name, email, password, roles, img);
        res.status(200).json(admin);
    } catch (error) {
        console.error("Error in adminUpdateController", error);
        next(error);
    }
}

const adminDeleteController = async (req, res, next) => {
    const {email} = req.body;
    const admin = await findAdminByEmail(email);
    if (!admin) {
        return res.status(404).json({ error: 'Admin not found' });
    }
    try {
        const admin = await deleteAdmin(email);
        res.status(200).json(admin);
    } catch (error) {
        console.error("Error in adminDeleteController", error);
        next(error);
    }
}

const adminAllController = async (req, res, next) => {
    try {
        const admins = await allAdmins();
        res.status(200).json(admins);
    } catch (error) {
        console.error("Error in adminAllController", error);
        next(error);
    }
}

module.exports = {
    adminCreateController,
    adminLoginController,
    adminUpdateController,
    adminDeleteController,
    adminAllController
};