const UsersService = require('../../services/users/GetUsersService');

const getSellers = async (_req, res) => {
  const users = await UsersService.getSellers();
  return res.status(200).json(users);
};

const getAllUsers = async (_req, res) => {
  const users = await UsersService.getAllUsers();
  return res.status(200).json(users);
};

module.exports = { getSellers, getAllUsers };
