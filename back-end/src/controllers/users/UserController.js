const usersService = require('../../services/users/UsersServices');
 
const removeUser = async (req, res) => {
  const { id } = req.params;
  await usersService.removerUser(Number(id));
  return res.status(200).send();
};

module.exports = { removeUser };
