// import all models
const Quote = require('./Quote');
const Trader = require('./Trader');
const AccountTransaction = require('./AccountTransaction')

Trader.hasMany(AccountTransaction, {
	foreignKey: 'trader_id'
      });
      AccountTransaction.belongsTo(Trader, {
	foreignKey: 'trader_id'
      });

module.exports = { Trader, Quote, AccountTransaction };
