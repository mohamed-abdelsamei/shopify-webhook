const OrderFactory = require('../factories/order.factory');
const CustomError = require('../utils/error');
const { eventEmitter, events } = require('../utils/eventEmitter');

class ShopifyController {
  static async create(req, res, next) {
    try {
      const payload = OrderFactory.createOrder('shopify', req.body);
      eventEmitter.emit(events.cancelOrder, payload);
      return res.status(200).json();
    } catch (error) {
      return next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const payload = OrderFactory.createOrder('shopify', req.body);
      if (!payload.orderId) throw new CustomError('order id is required', 400);
      eventEmitter.emit(events.updateOrder, payload);
      return res.status(200).json();
    } catch (error) {
      return next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const payload = OrderFactory.createOrder('shopify', req.body);
      if (!payload.orderId) throw new CustomError('order id is required', 400);
      eventEmitter.emit(events.deleteOrder, payload);
      return res.status(200).json();
    } catch (error) {
      return next(error);
    }
  }

  static async payment(req, res, next) {
    try {
      const payload = OrderFactory.createOrder('shopify', req.body);
      if (!payload.orderId) throw new CustomError('order id is required', 400);
      eventEmitter.emit(events.payOrder, payload);

      return res.status(200).json();
    } catch (error) {
      return next(error);
    }
  }
}
module.exports = ShopifyController;
