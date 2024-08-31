const {
    caroselCreateController,
    caroselFetchController,
    caroselUpdateController,
    caroselDeleteController
} = require('../controllers/caroselController');
const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const autheenticate = require('../middleware/authenticate');
const checkRole = require('../middleware/checkAdminRole');

router.post('/carosel-create', autheenticate, checkRole(['masterAdmin', 'admin', 'editor']), upload.single('image'), caroselCreateController);
router.get('/carosel-fetch', caroselFetchController);
router.put('/carosel-update/:id', autheenticate, checkRole(['masterAdmin', 'admin', 'editor']), upload.single('image'), caroselUpdateController);
router.delete('/carosel-delete/:id', autheenticate, checkRole(['masterAdmin', 'admin']), caroselDeleteController);

module.exports = router;