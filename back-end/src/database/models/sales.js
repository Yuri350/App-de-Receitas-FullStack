const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    createdAt: 'sale_date'
  },
  {
    tableName: 'sales',
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.users, {
      foreignKey: 'user_id', as: 'User',
    }),
      Sales.belongsTo(models.users, {
        foreignKey: 'seller_id', as: 'Seller',
      });
  }

  return Sales;
};

module.exports = Sales;
