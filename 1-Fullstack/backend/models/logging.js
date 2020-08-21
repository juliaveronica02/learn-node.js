'use strict';
module.exports = (sequelize, DataTypes) => {
  const logging = sequelize.define('logging', {
    idUser: DataTypes.INTEGER,
    username: DataTypes.STRING,
    role: {
      allowNull: false,
      type: DataTypes.ENUM("user", "admin")
    },
    token: DataTypes.STRING
  }, {});
  logging.associate = function(models) {
    // associations can be defined here
  };
  return logging;
};