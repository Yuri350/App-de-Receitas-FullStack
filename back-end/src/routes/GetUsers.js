const { Router } = require('express');

const getUsersController = require('../controllers/users/GetUsersController');

const router = Router();

router.get('/sellers', getUsersController.getSellers);

module.exports = router;