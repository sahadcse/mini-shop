const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: { type: String, enum: ['masterAdmin', "admin", "editor", 'viewer'], default: 'viewer' },
    imageUrl: { type: String, default: null },
}, { timestamps: true });

adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (error) {
        return next(error);
    }
});

adminSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;