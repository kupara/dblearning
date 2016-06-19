'use strict';

module.exports = function (sequelize, DataTypes) {
  var Role =  sequelize.define('Role', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: ['admin', 'user', 'viewer', 'tester']
        }
      }
    }, {
      underscored: true,
      timestamps: true
    }
  });
}
