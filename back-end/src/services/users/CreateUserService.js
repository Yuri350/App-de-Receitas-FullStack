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

const adminCreate = async ({ email, password, name, role = 'customer' }, authorization) => {
  const userExist = await users.findOne({ where: { email } });
  const { role: roleAdmin } = tokenHelper.verifyToken(authorization);
  console.log(roleAdmin);
  if (userExist || roleAdmin !== 'administrator') return null;
  const passwordHash = md5(password);
  await users.create({ email, password: passwordHash, name, role });
  return {
    name,
    email,
    role,
  };
};

module.exports = { create, adminCreate };
