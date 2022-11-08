const tokenHelper = require('../helpers/Token');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { email, id } = tokenHelper.verifyToken(authorization);
    req.user = {
      email,
      id,
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidation };
