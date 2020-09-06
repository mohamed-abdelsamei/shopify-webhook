// Import events module
const events = require('events');
const OrderService = require('../services/order.service');

const event = {
  createOrder: 'CREATE_ORDER',
  updateOrder: 'UPDATE_ORDER',
  deleteOrder: 'DELETE_ORDER',
  payOrder: 'PAY_ORDER',
};

const eventEmitter = new events.EventEmitter();
eventEmitter.on(event.createOrder, async (data) => {
  console.log(`order ${data.orderId} added `);
  try {
    OrderService.create(data);
  } catch (error) {
    console.log(error);
  }
});

eventEmitter.on(event.updateOrder, async (data) => {
  console.log(`order ${data.orderId} updated`);
  try {
    OrderService.update(data.orderId, data);
  } catch (error) {
    console.log(error);
  }
});

eventEmitter.on(event.deleteOrder, async (data) => {
  console.log(`order ${data.orderId} deleted`);
  try {
    OrderService.update(data.orderId, data);
  } catch (error) {
    console.log(error);
  }
});

eventEmitter.on(event.payOrder, async (data) => {
  console.log(`order ${data.orderId} payment`);
  try {
    OrderService.update(data.orderId, data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = { eventEmitter, events: event };
