const md5 = require('md5');
const { User } = require('../../database/models');

const tokenHelper = require('../../helpers/Token');

const login = async (email, password) => {
  const payload = {
    email,
    password,
  };
  const result = await User.findOne({
    attributes: { email, password },
    where: { email },
    raw: true,
  });
  const verifyPassword = md5(password);
  if (!result || result.password !== verifyPassword) {
    return null;
  }
  const token = tokenHelper.createToken(result);
  return {
    token,
  };
};

module.exports = { login };
