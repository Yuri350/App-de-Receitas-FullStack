const SalesService = require('../../services/sales/SalesService');

const createSale = async (req, res) => {
  const { body } = req;
  const { authorization } = req.headers;
  const dataValues = await SalesService.createSale(body, authorization);
  return res.status(201).json(dataValues);
};

const getByCustomer = async (req, res) => {
  const salesCustomer = await SalesService.getByCustomer(req.user.id);
  return res.status(200).json(salesCustomer);
};

const getBySeller = async (req, res) => {
  const saleSeller = await SalesService.getBySeller(req.user.id);
  return res.status(200).json(saleSeller);
};

module.exports = {
  createSale,
  getByCustomer,
  getBySeller,
};
