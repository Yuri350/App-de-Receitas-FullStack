const usersService = require('../../services/users/LoginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await usersService.login(email, password);
  if (!result) {
    return res.status(404).json({ message: 'Invalid fields' });
  }
  return res.status(200).json(result);
};

module.exports = { login };
