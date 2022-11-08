const { users } = require('../../database/models');

const getSellers = async () => {
  const sellers = await users.findAll({ where: { role: 'seller' } });
  return sellers;
};

module.exports = { getSellers };