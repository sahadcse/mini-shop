// admin create update delete find
const Admin = require('../../models/admin.model');
const jwt = require('jsonwebtoken');
const error = require('../../utils/error');
const imageUpload = require('../imageUpload');
const imageDelete = require('../imageDelete');
const { findAdminByEmail, findAdminById } = require('./findAdmin');
const checkRole = require('../../middleware/checkAdminRole');

const createAdmin = async (name, email, password, roles, img) => {
    try {
        const admin = new Admin({ name, email, password, roles });
        if (img) {
            const imageUrl = await imageUpload(img);
            admin.imageUrl = imageUrl
        }
        await admin.save();
        return admin;
    } catch (err) {
        console.error("Error in createAdmin", err);
        throw new Error(err);
    }
}
const updateAdmin = async (id, name, email, password, roles, img) => {
    try {
        const admin = await findAdminById(id);
        if (name) admin.name = name;
        if (email) admin.email = email;
        if (password) admin.password = password;
        if(checkRole('masterAdmin')) {
            if (roles) admin.roles = roles;
        }
        if (img) {
            if (admin.imageUrl) {
                await imageDelete(admin.imageUrl);
            }
            const imageUrl = await imageUpload(img);
            admin.imageUrl = imageUrl;
        }
        await admin.save();
        res.json({ message: 'Admin updated successfully' });
    } catch (err) {
        error.errorHandler(err, res);
    }
}

const deleteAdmin = async (email) => {
    try {
        const admin = await findAdminByEmail(email);
        if (admin.imageUrl) {
            await imageDelete(admin.imageUrl);
        }
        await admin.remove();
        res.json({ message: 'Admin deleted successfully' });
    } catch (err) {
        error.errorHandler(err, res);
    }
}


const loginAdmin = async (email, password) => {
    try {
        const admin = await findAdminByEmail(email);
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return { admin, token };
    } catch (err) {
        console.error("Error in loginAdmin", err);
        throw new Error(err);
    }
}
const allAdmins = async () => {
    try {
        const admins = await Admin.find();
        return admins;
    } catch (err) {
        console.error("Error in allAdmins", err);
        throw new Error(err);
    }
}

module.exports = { createAdmin, updateAdmin, deleteAdmin, loginAdmin, allAdmins };

