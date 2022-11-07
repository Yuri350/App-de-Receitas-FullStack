const express = require('express');

const productsController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', productsController.getAll);

module.exports = router;
