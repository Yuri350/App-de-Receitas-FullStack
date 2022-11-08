const md5 = require('md5');
const { users } = require('../../database/models');
const tokenHelper = require('../../helpers/Token');

const create = async ({ email, password, name, role = 'customer' }) => {
  const userExist = await users.findOne({ where: { email } });
  if (userExist) return null;
  const passwordHash = md5(password);
  const newUser = await users.create({ email, password: passwordHash, name, role });
  const token = tokenHelper.createToken({ email, password, role, id: newUser.id });
  return {
    name,
    email,
    role,
    token,
  };
};

module.exports = { create };
