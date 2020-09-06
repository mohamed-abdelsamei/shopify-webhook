const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({


}, { strict: false });
module.exports = mongoose.model('Order', orderSchema);
