const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class AccountTransaction extends Model {
}
AccountTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    trader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trader',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'account_transaction'
  }
);

module.exports = AccountTransaction;
