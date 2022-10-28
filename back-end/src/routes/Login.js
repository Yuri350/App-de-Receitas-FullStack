const { Router } = require('express');

const userController = require('../controllers/LoginController');
const validation = require('../middlewares/Validations');
// const tokenValidation = require('../middlewares/TokenAuth');

const router = Router();
router.post('/', validation.loginValidation, userController.login);

module.exports = router;