const { users } = require('../../database/models');

const getUserById = async (email) => {
  const userExist = await users
    .findOne({ where: { email }, attributes: { exclude: ['id', 'role'] } });
  if (!userExist) {
    return null;
  }
  return userExist;
};

module.exports = { getUserById };
