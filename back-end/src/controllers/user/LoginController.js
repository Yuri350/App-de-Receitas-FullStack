const usersService = require('../../services/login/LoginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await usersService.login(email, password);
  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json(result);
};

module.exports = { login };
