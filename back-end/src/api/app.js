const express = require('express');
const cors = require('cors');
const router = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', router.loginRoute);
app.use('/users', router.usersRoute);
app.use('/customer/products', router.productsRoute);

module.exports = app;
