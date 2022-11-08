const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'products',
      underscored: true
    });

  Products.associate = (models) => {
    Products.hasMany(models.salesProducts, {
      foreignKey: 'productId', as: 'ProdutoVendido',
    });
  }

  return Products;
};

module.exports = Products;
