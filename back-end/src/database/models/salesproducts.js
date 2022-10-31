const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Sales',
        key: 'id'
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Products',
        key: 'id'
      },
    },
    quantity: DataTypes.INTEGER
  },
    {
      timestamps: false,
      tableName: 'SalesProducts'
    });

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: 'SalesProducts',
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: 'SalesProducts',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return SalesProducts;
}

module.exports = SalesProducts;
