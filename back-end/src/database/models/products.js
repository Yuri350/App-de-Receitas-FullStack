const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Products',
  });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, {
      foreignKey: 'product_id', as: 'SalesProducts',
    });
  }

  return Products;
};