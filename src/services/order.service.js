const OrderModel = require('../models/order.model');

class OrderService {
  static async create(payload) {
    return OrderModel.create(payload);
  }

  static async update(orderId, data) {
    return OrderModel.updateOne({ orderId }, data, { upsert: true });
  }

  static async findOneByOrderId(orderId) {
    return OrderModel.findOne({ orderId });
  }

  static async findAll() {
    return OrderModel.find();
  }
}

module.exports = OrderService;
