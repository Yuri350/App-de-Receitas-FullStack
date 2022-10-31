const md5 = require('md5');
const { users } = require('../database/models');

const tokenHelper = require('../helpers/Token');

const login = async (email, password) => {
  const result = await users.findOne({
    attributes: { email, password },
    where: { email },
    raw: true,
  });
  const { role } =  result;
  const payload = {
    email,
    password,
    role,
  };
  const verifyPassword = md5(password);
  if (!result || result.password !== verifyPassword) {
    return null;
  }
  console.log('teste')
  const token = tokenHelper.createToken(payload);
  return token;
};

module.exports = { login };