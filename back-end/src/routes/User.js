const { Router } = require('express');

const createUserController = require('../controllers/user/CreateUserController');
const validation = require('../middlewares/Validations');

const router = Router();

router.post('/', validation.createLoginValidation, createUserController.create);

module.exports = router;
