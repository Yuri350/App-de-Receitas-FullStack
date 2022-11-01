const { Router } = require('express');

const createUserController = require('../controllers/user/CreateUserController');
const validateUser = require('../controllers/user/ValidateUser');
const validation = require('../middlewares/Validations');
const tokenAuth = require('../middlewares/TokenAuth');

const router = Router();

router.post('/', validation.createLoginValidation, createUserController.create);
router.get('/', tokenAuth.tokenValidation, validateUser.getUserById);

module.exports = router;
