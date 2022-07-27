'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Linked_domains }) {
      this.hasMany(Comment, { foreignKey: 'account_id' }),
        this.hasMany(Linked_domains, {foreignKey: 'account_id'})
    }
  }
  Account.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};
