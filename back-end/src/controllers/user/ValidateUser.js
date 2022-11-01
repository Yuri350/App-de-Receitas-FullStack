const UsersService = require('../../services/login/ValidateUser');

const getUserById = async (request, response) => {
  const { id } = request.user;
  const user = await UsersService.getUserById(id);
  return response.status(201).json(user);
}


module.exports = { getUserById };
