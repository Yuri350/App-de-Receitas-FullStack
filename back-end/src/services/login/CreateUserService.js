const md5 = require('md5');
const { users } = require('../../database/models');
const tokenHelper = require('../../helpers/Token');

const create = async ({ email, password, name, role }) => {
  const userExist = await users.findOne({ where: { email } });
  if (userExist) {
    return null;
  }
  const passwordHash = md5(password);
  await users.create({ email, password: passwordHash, name, role });
  const token = tokenHelper.createToken({ email, password, role });

  return {
    token,
  };
};

module.exports = { create };
