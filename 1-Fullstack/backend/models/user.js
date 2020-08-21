'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    password: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};