const UsersService = require('../../services/login/ValidateUser');

const getUserById = async (request, response) => {
  const { email } = request.user;
  console.log(email);
  const user = await UsersService.getUserById(email);
  return response.status(200).json(user);
};

module.exports = { getUserById };
