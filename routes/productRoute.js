const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const autheenticate = require('../middleware/authenticate');
const checkRole = require('../middleware/checkAdminRole');
const {
    productCreateController,
    productGetController,
    productUpdateController,
    productDeleteController
} = require('../controllers/productController');

router.post('/product-create', autheenticate, checkRole(['masterAdmin', 'admin']), upload.single('img'), productCreateController);

router.get('/product-get', productGetController);

router.put('/product-update/:id', autheenticate, checkRole(['masterAdmin', 'admin', 'editor']), upload.single('img'), productUpdateController);

router.delete('/product-delete/:id', autheenticate, checkRole(['masterAdmin', 'admin']), productDeleteController);

module.exports = router;