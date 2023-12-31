const express = require('express');
require('express-async-errors');
const app = express();

const errorMiddleware = require('./middlewares/error');

app.use(express.json());

//import all routes
const products = require('./routes/product');

app.use('/api/v1', products);

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app