const { users } = require('../../database/models');

const getSellers = async () => {
  const sellers = await users.findAll({ where: { role: 'seller' } });
  return sellers;
};

const getSellersId = async (id) => {
  const sellers = await users.findOne({ where: { role: 'seller', id } });
  return sellers;
};

module.exports = { getSellers, getSellersId };