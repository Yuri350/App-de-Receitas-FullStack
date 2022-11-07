const productService = require('../services/ProductService');

const getAll = async (_req, res) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

module.exports = { getAll };
