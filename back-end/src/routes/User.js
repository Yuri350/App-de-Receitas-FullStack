const { Router } = require('express');

const createUserController = require('../controllers/users/CreateUserController');
const getAllUsersController = require('../controllers/users/GetUsersController');
const usersController = require('../controllers/users/UserController');
const validation = require('../middlewares/Validations');

const router = Router();

router.post('/', validation.createLoginValidation, createUserController.create);
router.post('/admin/create', validation.createLoginValidation, createUserController.adminCreate);
router.get('/admin/getUsers', getAllUsersController.getAllUsers);
router.delete('/admin/deleteUser/:id', usersController.removeUser);

module.exports = router;
