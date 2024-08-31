const { findAdminByEmail, findAdminById } = require('../services/admin/findAdmin');

const checkAdminRole = (role) => {
    return async (req, res, next) => {
        // console.log('checkAdminRole:', req.body)
        if(!req.user.id){
            return res.status(403).json({ message: 'You are not ADMIN to access this route' });
        }
        try {
            const admin = await findAdminById(req.user.id);
            if(role.includes(admin.roles)) {
                return next();
            }
            return res.status(403).json({ message: 'You are not authorized to access this route' });
        } catch (err) {
            console.error("Error in checkAdminRole", err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = checkAdminRole;