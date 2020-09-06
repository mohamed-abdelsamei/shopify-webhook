const mongoose = require('mongoose');
const config = require('../../config');

const connect = async () => {
  try {
    await mongoose.connect(config.mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connect };
