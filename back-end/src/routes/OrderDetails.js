const { Router } = require('express');

const orderController = require('../controllers/order/OrderController');

const router = Router();

router.get('/:id', orderController.getByIdSales);
router.patch('/:id', orderController.patchSales);

module.exports = router;
