const express = require('express');

const router = express.Router();
const OrderController = require('../controllers/order.controller');

router.get('/', OrderController.findAll);

module.exports = router;
