const config = {};

config.env = 'dev';
config.port = 3000;
config.shopify = {
  SHOPIFY_WEBHOOK_SECRET: 'SECRET KEY',
};
config.mongo = {
  uri: 'mongodb://localhost:37017/shopify',
};


module.exports = config;
