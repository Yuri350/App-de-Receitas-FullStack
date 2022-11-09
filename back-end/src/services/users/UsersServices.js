const { users } = require('../../database/models');

const removerUser = async (id) => {
  await users.destroy({ where: { id } });
}; 

module.exports = { removerUser };
