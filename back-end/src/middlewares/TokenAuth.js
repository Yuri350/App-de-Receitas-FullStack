const tokenHelper = require('../helpers/Token');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const dataToken = tokenHelper.verifyToken(authorization);
    req.email = dataToken.email;
    req.role = dataToken.role;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;