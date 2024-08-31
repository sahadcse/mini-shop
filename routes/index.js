const router = require('express').Router();
const userLoginRegisterRoute = require('./userLoginRegisterRoute');
const adminRoute = require('./adminRoute');
const productRoute = require('./productRoute');
const categoryRoute = require('./categoryRoute');
const orderRoute = require('./orderRoute');
const caroselRoute = require('./caroselRoute');
const generalInformationRoute = require('./generalInformationRoute');

router.use("/api/user", userLoginRegisterRoute);
router.use("/api/admin", adminRoute);
router.use("/api/product", productRoute);
router.use("/api/category", categoryRoute);
router.use("/api/order", orderRoute);
router.use("/api/carosel", caroselRoute);


module.exports = router 