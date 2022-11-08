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
      underscored: true
    });

  User.associate = (models) => {
    User.hasMany(models.sales, {
      foreignKey: 'userId', as: 'SaleUser',
    }),
    User.hasMany(models.sales, {
      foreignKey: 'sellerId', as: 'SaleSeller',
    })
  }

  return User;
};

module.exports = User;
