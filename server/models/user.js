module.exports = (sequelize, type) => {
  var User = sequelize.define('user',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        unique: true
      },
      name: {
        type: type.STRING,
        allowNull: false
      },
      userName: {
        type: type.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: type.STRING,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function (models) {
          User.hasMany(models.Expense)
        }
      }
    }
  )
  return User
}
