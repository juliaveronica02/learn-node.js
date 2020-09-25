'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jobdesk = sequelize.define('Jobdesk', {
    title: DataTypes.STRING,
    department: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  }, {});
  Jobdesk.associate = function(models) {
    Jobdesk.belongsTo(models.User, {foreignKey: 'userId', as: 'user'}, models.Company, {foreignKey: 'companyId', as: 'company'})
  };
  return Jobdesk;
};