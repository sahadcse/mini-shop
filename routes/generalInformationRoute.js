const {
    infoCreateController,
    infoUpdateController,
    infoFetchController,
    infoDeleteController
} = require('../controllers/generalInformation')
const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const autheenticate = require('../middleware/authenticate');
const checkRole = require('../middleware/checkAdminRole');