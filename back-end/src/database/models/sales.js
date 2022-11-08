const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.users, {
      foreignKey: 'userId', as: 'User',
    }),
      Sales.belongsTo(models.users, {
        foreignKey: 'sellerId', as: 'Seller',
      }),
      Sales.hasMany(models.salesProducts, {
        foreignKey: 'saleId', as: 'SalesProducts2',
      });

  }

  return Sales;
};

module.exports = Sales;
