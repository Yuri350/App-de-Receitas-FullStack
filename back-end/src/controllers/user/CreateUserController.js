const UsersService = require('../../services/login/CreateUserService');

const create = async (request, response) => {
  const { email, password, name, role } = request.body;
  const userCreated = await UsersService.create({ email, password, name, role });
  if (!userCreated) {
    return response.status(409).json({ message: 'User already registered' });
  }
  return response.status(201).json(userCreated);
};

module.exports = { create };
