const { Router } = require('express');

const userController = require('../controllers/user/LoginController');
const validation = require('../middlewares/Validations');

const router = Router();
router.post('/', validation.loginValidation, userController.login);

module.exports = router;
