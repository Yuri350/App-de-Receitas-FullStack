const { Router } = require('express');

const getByIdSales = require('../controllers/order/OrderController');

const router = Router();

router.get('/:id', getByIdSales.getByIdSales);

module.exports = router;
