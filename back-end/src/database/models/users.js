const User = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'users',
    });

  User.associate = (models) => {
    User.hasMany(models.Sales, {
      foreignKey: 'user_id', as: 'SaleUser',
    }),
    User.hasMany(models.Sales, {
      foreignKey: 'seller_id', as: 'SaleSeller',
    })
  }

  return User;
};

module.exports = User;
