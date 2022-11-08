const SalesService = require('../../services/sales/SalesService');

const createSale = async (req, res) => {
  const { body } = req;
  const { authorization } = req.headers;
  const dataValues = await SalesService.createSale(body, authorization);
  return res.status(201).json(dataValues);
};

module.exports = {
  createSale,
};