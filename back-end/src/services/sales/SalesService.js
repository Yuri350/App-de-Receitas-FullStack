const { sales, salesProducts } = require('../../database/models');
const { verifyToken } = require('../../helpers/Token');

const createSale = async (sale, token) => {
  const { info, products, total } = sale;
  const { id } = verifyToken(token);
  const newSale = {
    userId: id,
    sellerId: info.vendedor,
    totalPrice: total,
    deliveryAddress: info.endereço,
    deliveryNumber: info.numero,
    saleDate: new Date(),
    status: 'Pendente',
  };
  const { dataValues } = await sales.create(newSale);
  products.map(async (product) => {
    await salesProducts.create({
      saleId: dataValues.id, productId: product.id, quantity: product.quantity,
    });
  });
  return dataValues;
};

const getByCustomer = async (id) => {
  const listedSales = await sales.findAll({
    where: { userId: id },
    attributes: {
      exclude: [
        'userId',
        'sellerId',
      ],
    },
  });
  return listedSales;
};

const getBySeller = async (id) => {
  const listedSales = await sales.findAll({
    where: { sellerId: id },
  });
  return listedSales;
};

module.exports = { createSale, getByCustomer, getBySeller };
