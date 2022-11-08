const { sales, salesProducts, products } = require('../../database/models');

const getByIdSalesProducts = async (id) => {
  const result = await products.findAll({
    include: [{
      where: { saleId: id },
      model: salesProducts, as: 'ProdutoVendido'
    }]
  });

  if (!result) return null;
  return result;
};

const getByIdSales = async (id) => {
  const info = await sales.findByPk(id);

  const products = await getByIdSalesProducts(id);

  const result = {
    info,
    products
  }

  if (!result.info || !result.products) return null;
  return result;
};

module.exports = { getByIdSales, getByIdSalesProducts };

