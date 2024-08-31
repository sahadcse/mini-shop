const Admin = require('../../models/admin.model');

const findAdminByEmail = async (email) => {
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return null;
        }
        return admin;
    }
    catch (err) {
        console.error("Error in findAdmin", err);
        throw new Error(err);
    }
}


const findAdminById = async (id) => {
    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return null;
        }
        return admin;
    }
    catch (err) {
        console.error("Error in findAdminById", err);
        throw new Error(err);
    }
}

module.exports = { findAdminByEmail, findAdminById };