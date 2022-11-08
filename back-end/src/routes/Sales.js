const { Router } = require('express');

const salesController = require('../controllers/sales/SalesController');
const middlewares = require('../middlewares/TokenAuth');

const router = Router();

router.use(middlewares.tokenValidation);

router.post('/', salesController.createSale);

router.get('/customer/orders', salesController.getByCustomer);
router.get('/seller/orders', salesController.getBySeller);


module.exports = router;
