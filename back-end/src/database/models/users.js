const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Users',
    });

  User.associate = (models) => {
    User.belongsToMany(models.Sales, {
      foreignKey: 'user_id', as: 'Sales',
      through: 'Users',
    });
  }

  return User;
};

module.exports = User;
