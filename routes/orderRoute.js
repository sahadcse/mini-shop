const auth = require('../middleware/authenticate');
const router = require('express').Router();
const checkRole = require('../middleware/checkAdminRole');
const { 
    orderCreateController,
    orderListController,
    orderListUserController,
    orderSingleController,
    orderUpdateController,
    orderDeleteController
} = require('../controllers/orderController');

router.post('/order-create', auth, orderCreateController);
router.get('/order-list', auth, orderListController);
router.get('/order-list-user/:email', auth, orderListUserController);
router.get('/order-single/:orderId', auth, orderSingleController);
router.put('/order-update', auth, checkRole(['masterAdmin', 'admin']), orderUpdateController);
router.delete('/order-delete', auth, checkRole(['masterAdmin', 'admin']), orderDeleteController);

module.exports = router;