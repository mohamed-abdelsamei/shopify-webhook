const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

app.use(morgan('dev'));
app.use('/shopify/order', bodyParser.raw({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes(app);
app.use(errorHandler);
module.exports = app;
