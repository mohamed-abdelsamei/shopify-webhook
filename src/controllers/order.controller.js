const OrderService = require('../services/order.service');

class OrderController {
  static async findAll(req, res, next) {
    try {
      const orders = await OrderService.findAll();
      return res.json({ orders });
    } catch (error) {
      return next(error);
    }
  }
}
module.exports = OrderController;
