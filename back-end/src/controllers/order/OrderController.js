const orderService = require('../../services/order/orderService')

const getByIdSales = async (req, res) => {
  const { id } = req.params;

  const result = await orderService.getByIdSales(id);
  return res.status(200).json(result);
}

module.exports = { getByIdSales };
