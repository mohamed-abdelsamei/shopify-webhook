const crypto = require('crypto');
const config = require('../../config');
const CustomError = require('../utils/error');

module.exports = async (req, res, next) => {
  try {
    // We'll compare the hmac to our own hash
    const hmac = req.headers['x-shopify-hmac-sha256'];
    const hash = crypto
      .createHmac('sha256', config.shopify.SHOPIFY_WEBHOOK_SECRET)
      .update(req.body, 'utf8', 'hex')
      .digest('base64');


    if (hash !== hmac) throw new CustomError('sorry :) ', 403);
    req.body = JSON.parse(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};
