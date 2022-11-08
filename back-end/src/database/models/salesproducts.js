const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    // saleId: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   foreignKey: true,
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE',
    //   references: {
    //     model: 'sales',
    //     key: 'id'
    //   },
    //   allowNull: false
    // },
    // productId: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   foreignKey: true,
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE',
    //   references: {
    //     model: 'products',
    //     key: 'id'
    //   },
    //   allowNull: false
    // },
    quantity: DataTypes.INTEGER
  },
    {
      timestamps: false,
      tableName: 'sales_products',
      underscored: true
    });

  SalesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: 'salesProducts',
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: 'salesProducts',
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }

  return SalesProducts;
}

module.exports = SalesProducts;
