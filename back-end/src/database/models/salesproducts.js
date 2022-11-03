const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'sales',
        key: 'id'
      },
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'products',
        key: 'id'
      },
      allowNull: false
    },
    quantity: DataTypes.INTEGER
  },
    {
      timestamps: false,
      tableName: 'salesProducts'
    });

  SalesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: 'salesProducts',
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: 'salesProducts',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return SalesProducts;
}

module.exports = SalesProducts;
