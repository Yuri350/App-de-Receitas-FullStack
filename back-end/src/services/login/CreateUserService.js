const { User } = require('../../database/models');
const tokenHelper = require('../../helpers/Token');
const md5 = require('md5');

const create = async ({ email, password, name, role }) => {

  const userExist = await User.findOne({ where: { email } });
  if (userExist) {
    return null;
  }
  const passwordHash = md5(password)
  await User.create({ email, password: passwordHash, name, role }, );
  const token = tokenHelper.createToken({ email, password, name, role })

  return {
    token,
  }
}


module.exports = { create }
