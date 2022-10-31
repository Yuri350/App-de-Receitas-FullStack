const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'products',
    });

  Products.associate = (models) => {
    Products.hasMany(models.salesProducts, {
      foreignKey: 'product_id', as: 'SalesProducts1',
    });
  }

  return Products;
};

module.exports = Products;
