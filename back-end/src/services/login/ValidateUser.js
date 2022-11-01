const { users } = require('../../database/models');

const getUserById = async (id) => {
  const userExist = await users.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!userExist) {
    return null;
  }
  return userExist;
};

module.exports = { getUserById };
