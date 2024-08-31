const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const checkRole = require('../middleware/checkAdminRole');
const { 
    categoryCreateController, 
    categoryListController, 
    categoryUpdateController, 
    categoryDeleteController, 
    categoryGetController 
} = require('../controllers/categoryController');

router.post('/category-create', authenticate, checkRole(['masterAdmin', 'admin']), categoryCreateController);
router.get('/category-list', categoryListController);
router.get('/category-get/:id', categoryGetController);
router.put('/category-update/:id', authenticate, checkRole(['masterAdmin', 'admin', 'editor']), categoryUpdateController);
router.delete('/category-delete/:id', authenticate, checkRole(['masterAdmin', 'admin']), categoryDeleteController);


module.exports = router