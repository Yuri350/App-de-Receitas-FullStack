const { products } = require('../database/models');

const upload = async (id, urlImg) => {
  const result = await products.update({ url_image: urlImg }, { where: { id } });
  return result;
}

module.exports = { upload };
