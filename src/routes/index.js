const shopifyRoutes = require('./shopify.routes');
const orderRoutes = require('./order.routes');

const routes = (app) => {
  app.use('/shopify', shopifyRoutes);
  app.use('/order', orderRoutes);
};
module.exports = routes;
