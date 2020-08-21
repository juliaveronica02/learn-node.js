'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  admin.associate = function(models) {
    // associations can be defined here
  };
  return admin;
};