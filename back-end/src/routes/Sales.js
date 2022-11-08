const { Router } = require('express');

const salesController = require('../controllers/sales/SalesController');

const router = Router();

router.post('/', salesController.createSale);

module.exports = router;
