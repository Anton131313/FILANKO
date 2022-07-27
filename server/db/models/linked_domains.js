'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Linked_domains extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Account}) {
      this.belongsTo(Account, {foreignKey: 'account_id'})
    }
  }
  Linked_domains.init({
    name: DataTypes.STRING,
    name_adress: DataTypes.STRING,
    account_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Linked_domains',
  });
  return Linked_domains;
};
