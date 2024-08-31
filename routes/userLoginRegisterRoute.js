const router = require('express').Router();
const { registerController, loginController, updateController, deleteController } = require('../controllers/userController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const authenticate = require('../middleware/authenticate');

router.post('/register', upload.single('img'), registerController);
router.post('/login', loginController);
router.put('/update-user', authenticate, updateController);
router.delete('/delete-user', authenticate, deleteController);


module.exports = router;