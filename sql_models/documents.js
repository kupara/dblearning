'use strict';

module.exports = function (sequelize, DataTypes) {
  var Document =  sequelize.define('Document', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      ownerId: {
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        unique: true
      },
      content: {
        type: DataTypes.TEXT,
      },
      accessLevel: {
        type: DataTypes.STRING,
        validate: {
          isIn: ['admin', 'private', 'public']
        }
      },
      comments: {
        type: DataTypes.TEXT
      }
    }, {
      underscored: true,
      timestamps: true
    }
  });
}
