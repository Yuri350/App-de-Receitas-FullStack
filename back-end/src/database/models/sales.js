const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
    total_price: DataTypes.DECIMAL,
    delivery_Adress: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: DataTypes.STRING
  },
    {
      createdAt: 'sale_date'
    },
    {
      tableName: 'Sales',
    });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, {
      foreignKey: 'user_id', as: 'User',
    }),
      Sales.belongsTo(models.User, {
        foreignKey: 'seller_id', as: 'Seller',
      });
  }

  return Sales;
};

module.exports = Sales;
