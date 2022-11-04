const { Router } = require('express');

const multer = require('multer');
const uploadConfig = require('../config/upload');
const productsController = require('../controllers/ProductController');
const uploadImageController = require('../controllers/uploadImageController');
const upload = multer(uploadConfig.upload('./tmp/products'));

const router = Router();
router.get('/', productsController.getAll);
router.patch('/:id', uploadImageController.upload);

module.exports = router;
