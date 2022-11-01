const tokenHelper = require('../helpers/Token');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const {id} = tokenHelper.verifyToken(authorization);
    req.user = {
      id
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {tokenValidation};
