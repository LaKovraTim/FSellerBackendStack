const router = require('express').Router();
const PushController = require('./push.controller');
const validateBodyMDW = require('../middlewares/validate-body.mdw');

router.post('/push/whatsapp', validateBodyMDW, PushController.sendWhatsAppMsg);

module.exports = router;
