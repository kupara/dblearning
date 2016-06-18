'use strict';

module.exports = function (sequelize, DataTypes) {
  var User =  sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING
      }
    }, {
      underscored: true,

    }
  });
}
