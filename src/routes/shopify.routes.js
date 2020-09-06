const express = require('express');

const router = express.Router();
const ShopifyController = require('../controllers/shopify.controller');
const verifyShopify = require('../middleware/verifyShopify');

router.post('/order/create', verifyShopify, ShopifyController.create);
router.post('/order/payment', verifyShopify, ShopifyController.payment);
router.post('/order/update', verifyShopify, ShopifyController.update);
router.post('/order/delete', verifyShopify, ShopifyController.delete);
module.exports = router;
