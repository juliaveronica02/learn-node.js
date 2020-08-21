'use strict';
module.exports = (sequelize, DataTypes) => {
  const feedback = sequelize.define('feedback', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    comments: DataTypes.TEXT
  }, {});
  feedback.associate = function(models) {
    // associations can be defined here
  };
  return feedback;
};