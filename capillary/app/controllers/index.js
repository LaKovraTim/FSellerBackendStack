const router = require('express').Router();
const SellerController = require('./seller.controller');
const validateBodyMDW = require('../middlewares/validate-body.mdw');

router.get('/sellers/:id/work-orders', SellerController.getWorkOrdersList);
router.post('/sellers/:sellerId/work-orders/:woId/retries', validateBodyMDW, SellerController.saveWorkOrderRetry);
router.patch('/sellers/:sellerId/work-orders', validateBodyMDW, SellerController.turnOnRouteMyWork);

module.exports = router;
