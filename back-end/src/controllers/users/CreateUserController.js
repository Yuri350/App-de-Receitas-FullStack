const UsersService = require('../../services/users/CreateUserService');

const create = async (request, response) => {
  const { email, password, name, role } = request.body;
  const userCreated = await UsersService.create({ email, password, name, role });
  if (!userCreated) {
    return response.status(409).json({ message: 'User already registered' });
  }
  return response.status(201).json(userCreated);
};

const adminCreate = async (req, res) => {
  const { email, password, name, role } = req.body;
  const { authorization } = req.headers;
  const userCreated = await UsersService
    .adminCreate({ email, password, name, role }, authorization);
  if (!userCreated) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json(userCreated);
};

module.exports = { create, adminCreate };
