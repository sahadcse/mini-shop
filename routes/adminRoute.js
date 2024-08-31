const router = require('express').Router();
const multer = require('multer');
const { adminCreateController, adminLoginController, adminUpdateController, adminDeleteController, adminAllController } = require('../controllers/adminController');
const upload = multer({ dest: 'uploads/' });
const autheenticate = require('../middleware/authenticate');
const checkRole = require('../middleware/checkAdminRole');

router.post('/admin-create', autheenticate, checkRole(['masterAdmin']), upload.single('img'), adminCreateController);
router.post('/admin-login', adminLoginController);
router.put('/admin-update/:id', autheenticate, upload.single('img'), adminUpdateController);
router.delete('/admin-delete/:id', autheenticate, checkRole(['masterAdmin']), adminDeleteController);
router.get('/admin-all', autheenticate, checkRole(['masterAdmin', 'admin']), adminAllController);

module.exports = router;
